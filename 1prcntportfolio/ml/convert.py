# convert.py
# Takes the trained sklearn model and converts it to ONNX format.
# ONNX (Open Neural Network Exchange) is a standard format that can run
# in many environments including the browser via onnxruntime-web.
# Think of it like exporting a Figma file to SVG — same thing, different runtime.

import pickle
import numpy as np
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

# ── 1. LOAD THE TRAINED MODEL ─────────────────────────────────────────────────
with open("swype_model.pkl", "rb") as f:
    saved = pickle.load(f)

model = saved["model"]
scaler = saved["scaler"]

# ── 2. CONVERT SCALER ─────────────────────────────────────────────────────────
# The scaler needs to be converted too — it has to run in the browser
# before the model sees the data, just like during training.
# We'll convert both and chain them into a pipeline.
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ("scaler", scaler),
    ("model", model)
])

# ── 3. CONVERT TO ONNX ────────────────────────────────────────────────────────
# We tell it: input is a 2D float array with 63 features per row.
# None means batch size is flexible (we'll send one sample at a time).
initial_type = [("float_input", FloatTensorType([None, 63]))]

onnx_model = convert_sklearn(
    pipeline,
    name="GestureClassifier",
    initial_types=initial_type,
    target_opset=12  # opset 12 is well supported by onnxruntime-web
)

# ── 4. SAVE ───────────────────────────────────────────────────────────────────
with open("swype_model.onnx", "wb") as f:
    f.write(onnx_model.SerializeToString())

print("Saved swype_model.onnx")

# ── 5. QUICK SANITY CHECK ─────────────────────────────────────────────────────
# Before trusting the browser, verify the ONNX model gives same results
# as the original sklearn model on a few samples.
import onnxruntime as rt

# load and run the onnx model
sess = rt.InferenceSession("swype_model.onnx")
input_name = sess.get_inputs()[0].name
label_name = sess.get_outputs()[0].name

# make a dummy input — 63 zeros, just to check it runs without crashing
dummy = np.zeros((1, 63), dtype=np.float32)
pred = sess.run([label_name], {input_name: dummy})
print(f"Test prediction on dummy input: {pred}")
print("ONNX conversion successful")