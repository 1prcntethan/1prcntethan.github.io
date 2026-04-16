# train.py
# This script takes your collected gesture data (CSV of hand landmarks)
# trains a classifier to recognize gestures, evaluates it, and exports
# a model file that can run inside the browser.

import pandas as pd
import numpy as np
from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report, confusion_matrix
import pickle

# ── 1. LOAD DATA ──────────────────────────────────────────────────────────────
# pandas reads your CSV into a "DataFrame" — basically a table in memory.
# Each row is one sample (one frame where you held a gesture).
# Each column is one feature (x0, y0, z0, x1, y1, z1, ... x20, y20, z20, label)
df = pd.read_csv("gesture_data.csv")

print(f"Total samples: {len(df)}")
print(f"Samples per gesture:\n{df['label'].value_counts()}")
# This printout is important — if one gesture has way fewer samples than
# others, your model will be biased. Aim for roughly equal counts.

# ── 2. SPLIT FEATURES AND LABELS ─────────────────────────────────────────────
# X = the input to the model (63 numbers per sample — 21 landmarks × x,y,z)
# y = the answer we want the model to learn (the gesture name)
X = df.drop("label", axis=1).values  # .values converts DataFrame to numpy array
y = df["label"].values

print(f"\nFeature shape: {X.shape}")  # should be (num_samples, 63)
print(f"Classes: {np.unique(y)}")

# ── 3. NORMALIZE THE FEATURES ─────────────────────────────────────────────────
# This is one of the most important steps for understanding, so read carefully.
#
# Right now your 63 features are raw MediaPipe coordinates (values ~0.0 to 1.0).
# The problem: if you record "pointer" mostly in the center of frame, the model
# learns that pointer = coordinates around 0.5. Then when you point at the
# corner of the screen it fails, because those coordinates look different.
#
# The fix is to make coordinates RELATIVE TO THE WRIST (landmark 0).
# If every landmark is expressed as "distance from wrist" instead of
# "position in frame", the gesture looks the same no matter where your
# hand is. This is called wrist-centering.
#
# We also divide by the distance from wrist to middle finger base (landmark 9)
# to normalize for hand size / distance from camera.

def normalize_landmarks(row):
    # row is 63 values: [x0,y0,z0, x1,y1,z1, ..., x20,y20,z20]
    # reshape into (21, 3) so we can work with landmarks individually
    landmarks = row.reshape(21, 3)
    
    # wrist is landmark 0
    wrist = landmarks[0]
    
    # subtract wrist from every landmark — now everything is relative to wrist
    centered = landmarks - wrist
    
    # landmark 9 is the base of the middle finger — good reference for hand scale
    scale = np.linalg.norm(centered[9])  # distance from wrist to middle finger base
    
    if scale > 0:
        centered = centered / scale  # divide everything by hand scale
    
    # flatten back to 63 values
    return centered.flatten()

# apply this normalization to every row in X
X_normalized = np.array([normalize_landmarks(row) for row in X])

print("\nNormalization done. Feature range after normalization:")
print(f"  min: {X_normalized.min():.3f}, max: {X_normalized.max():.3f}")
# after normalization values will no longer be 0-1, they'll be centered around 0

# ── 4. TRAIN / TEST SPLIT ─────────────────────────────────────────────────────
# We split data into two sets:
# - training set (80%): the model learns from this
# - test set (20%): we hide this from the model during training, then use it
#   to measure how well the model generalizes to data it's never seen
#
# If you only tested on training data, you'd get 99% accuracy because the
# model just memorizes. The test set gives you an honest number.
X_train, X_test, y_train, y_test = train_test_split(
    X_normalized, y,
    test_size=0.2,      # 20% held out for testing
    random_state=42,    # fixed seed so results are reproducible
    stratify=y          # ensures each gesture is proportionally represented
                        # in both train and test sets
)

print(f"\nTraining samples: {len(X_train)}")
print(f"Test samples: {len(X_test)}")

# ── 5. SCALE FEATURES ─────────────────────────────────────────────────────────
# StandardScaler transforms features so they have mean=0 and std=1.
# Neural networks train much better when all inputs are on a similar scale.
# Important: we fit the scaler ONLY on training data, then apply it to both.
# Fitting on test data too would be "data leakage" — the model would have
# indirectly seen test data during training.
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)  # fit + transform training data
X_test_scaled = scaler.transform(X_test)         # transform test data using same scaler

# ── 6. TRAIN THE MODEL ────────────────────────────────────────────────────────
# MLPClassifier = Multi-Layer Perceptron = a small neural network
#
# hidden_layer_sizes=(64, 32) means:
#   - input layer: 63 neurons (one per feature)
#   - hidden layer 1: 64 neurons
#   - hidden layer 2: 32 neurons
#   - output layer: 5 neurons (one per gesture class)
#
# Each layer learns increasingly abstract representations of the hand shape.
# This is genuinely all the ML you need for this problem — it's not a complex
# task, and small models train fast and run fast in the browser.
model = MLPClassifier(
    hidden_layer_sizes=(64, 32),
    activation="relu",      # relu is the standard activation function
    max_iter=1000,           # maximum training passes through the data
    random_state=42,
    verbose=True             # prints loss at each iteration so you can watch it train
)

print("\nTraining model...")
model.fit(X_train_scaled, y_train)

# ── 7. EVALUATE ───────────────────────────────────────────────────────────────
# This is where you find out if your data collection was good enough.
# 
# The classification report shows precision/recall/f1 per gesture.
# Precision: of times it predicted "scroll", how often was it actually scroll?
# Recall: of actual scroll samples, how many did it correctly identify?
# F1: harmonic mean of both — the number you want to be high (>0.90 is good)
y_pred = model.predict(X_test_scaled)

print("\n── RESULTS ──────────────────────────────")
print(classification_report(y_test, y_pred))

print("Confusion matrix (rows=actual, cols=predicted):")
print(confusion_matrix(y_test, y_pred, labels=np.unique(y)))
print(f"Labels: {np.unique(y)}")
# The confusion matrix tells you WHICH gestures get confused with each other.
# If scroll and pointer are mixed up a lot, those two hand shapes are too similar
# and you need more/better training data for them.

# ── 8. EXPORT ─────────────────────────────────────────────────────────────────
# Save the trained model AND the scaler together.
# The scaler must be saved because at inference time (in the browser) you need
# to apply the exact same scaling that was applied during training.
# If you scale differently at inference, predictions will be garbage.
with open("gesture_model.pkl", "wb") as f:
    pickle.dump({"model": model, "scaler": scaler}, f)

print("\nSaved gesture_model.pkl")
print("Next step: convert to ONNX for browser inference")