# PCA & clustering

Both run in a background thread (a Web Worker) so the UI doesn't lock up
while they compute — you'll see the button switch to "Running…" and
re-enable when done.

## PCA (dimensionality reduction)

Select up to 15 numeric columns and run PCA to compress them down to
their two directions of greatest variance (PC1 / PC2), useful for seeing
structure in high-dimensional data on a single scatter plot.

- Points are colored by the [target column](preprocessing.md#target-column-traintest-split)
  if one is set
- Shows variance explained per component
- **"Add PC1/PC2 as columns"** saves the components back as real columns
  for further analysis

Implementation note: uses the Jacobi eigenvalue algorithm on the
correlation matrix — no external linear-algebra library.

## K-means clustering

Select numeric feature columns and a number of clusters (k = 2–10). Uses
k-means++ initialization for more reliable starting centroids than plain
random init.

- Scatter plot colored by cluster assignment (plotted on the first two
  selected columns)
- Cluster size table
- **"Add cluster column"** saves the assignment back as a real column

## Using the result in a report

Both PCA and clustering results are cached on the dataset after a run.
The report builder's **Dataset chart** block can show them directly
without recomputing — see [Reports → Advanced mode](../reports/advanced-mode.md).
