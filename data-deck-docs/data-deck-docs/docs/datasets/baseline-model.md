# Baseline model

A fast sanity check on whether your data is even predictive, trained
entirely client-side — not a replacement for a real ML pipeline.

## Requirements

Set a [target column](preprocessing.md#target-column-traintest-split)
first:

- **Numeric target** → trains a linear regression
- **Categorical target with exactly two classes** → trains a logistic
  regression (binary classification)
- More than two classes isn't supported by this baseline — you'll get a
  clear message explaining why instead of a misleading result

## Training

1. Select which numeric columns to use as features
2. Set a test-data share (5–50%)
3. Click **Train model**

Training (gradient descent) runs in a background thread, same as
[PCA and clustering](pca-clustering.md).

## Results

- **Regression:** RMSE, MAE, R² on held-out test data, plus a
  coefficients table
- **Classification:** accuracy, precision, recall, F1, a confusion
  matrix, plus a coefficients table

Coefficients are on standardized (z-scored) features, so their relative
size — not raw value — indicates each feature's influence.
