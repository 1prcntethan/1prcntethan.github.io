# convert.py
# ─────────────────────────────────────────────────────────────────────────────
# This script takes the trained sklearn model (.pkl) and converts it into
# ONNX format (.onnx) so it can run inside the browser via onnxruntime-web.
#
# Why do we need to convert at all?
# sklearn models are Python objects — they only exist in Python memory.
# ONNX (Open Neural Network Exchange) is a universal format that describes
# a model as a computation graph, which any ONNX-compatible runtime can execute.
# onnxruntime-web is one such runtime — it runs in the browser via WebAssembly.
# Think of it like exporting a Figma file to SVG: same data, different runtime.
# ─────────────────────────────────────────────────────────────────────────────

import pickle
import numpy as np
from skl2onnx import convert_sklearn                    # converts sklearn → ONNX
from skl2onnx.common.data_types import FloatTensorType  # describes input data type
from sklearn.pipeline import Pipeline                   # chains scaler + model together

# ── 1. LOAD THE TRAINED MODEL ─────────────────────────────────────────────────
# We saved both the scaler and the model together in one .pkl file in train.py.
# "rb" = read binary — .pkl files are binary, not text.
# pickle is Python's built-in serialization format: it converts any Python
# object into bytes so it can be saved to disk and loaded back later.
with open("swype_model.pkl", "rb") as f:
    saved = pickle.load(f)

model = saved["model"]   # the trained MLPClassifier neural network
scaler = saved["scaler"] # the StandardScaler that was fit on training data

# ── 2. WRAP IN A PIPELINE ─────────────────────────────────────────────────────
# A Pipeline chains multiple steps so they run in sequence automatically.
# During training we ran: raw data → scaler → model
# We need inference to do the exact same thing in the same order.
# By wrapping them in a Pipeline, skl2onnx can convert BOTH steps into
# a single ONNX graph, so the browser only needs to load one file and
# the scaling happens automatically before the model sees the input.
# If we forgot to include the scaler here, the model would get unscaled
# input at inference time and predictions would be wrong.
pipeline = Pipeline([
    ("scaler", scaler),  # step 1: normalize the input features
    ("model", model)     # step 2: classify the normalized features
])

# ── 3. DESCRIBE THE INPUT SHAPE ───────────────────────────────────────────────
# ONNX needs to know what shape of data this model expects.
# FloatTensorType([None, 63]) means:
#   - None: batch size is flexible (we'll send 1 sample at a time, but None
#           lets us send any number if we wanted)
#   - 63: each sample has 63 features (21 landmarks × 3 coordinates each)
# "float_input" is just the name we give this input — has to match what
# we use when we call the model in JavaScript later.
initial_type = [("float_input", FloatTensorType([None, 63]))]

# ── 4. CONVERT TO ONNX ────────────────────────────────────────────────────────
# This is the actual conversion. skl2onnx walks through the pipeline,
# converts each sklearn operation into equivalent ONNX operations,
# and produces a model graph.
#
# target_opset=12: ONNX has versioned "operator sets". Opset 12 is well
# supported by onnxruntime-web in the browser. Higher opsets have newer
# features but less browser support.
#
# options={"zipmap": False}: this is the critical fix.
# By default, sklearn classifiers output a "ZipMap" — a dictionary mapping
# class names (strings) to probabilities. That's useful in Python but
# onnxruntime-web can't deserialize string-keyed maps.
# zipmap: False tells the converter to output a plain float array instead,
# where index 0 = probability of class 0, index 1 = class 1, etc.
# We then map those indices back to gesture names manually in JavaScript.
onnx_model = convert_sklearn(
    pipeline,
    name="GestureClassifier",
    initial_types=initial_type,
    target_opset=12,
    options={"zipmap": False}
)

# ── 5. SAVE THE ONNX FILE ─────────────────────────────────────────────────────
# SerializeToString() converts the ONNX model object into raw bytes.
# "wb" = write binary. The resulting file is what we copy into public/
# in our React project so the browser can fetch and load it.
with open("swype_model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())

print("Done. Output names:")

# ── 6. SANITY CHECK ───────────────────────────────────────────────────────────
# Load the ONNX file back and print its output names and types.
# This tells us exactly what to expect in JavaScript so we know which
# output index contains the class indices and which has probabilities.
import onnxruntime as rt
sess = rt.InferenceSession("swype_model.onnx")
for o in sess.get_outputs():
    print(f"  {o.name}: {o.type}")
    # expected output:
    #   output_label: tensor(int64)   ← predicted class as an integer index
    #   output_probability: tensor(float) ← 5 probabilities, one per gesture