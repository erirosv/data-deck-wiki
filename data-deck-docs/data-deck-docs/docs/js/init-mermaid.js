// Initializes Mermaid diagrams and keeps them in sync with the Material
// theme's light/dark toggle. Data Deck's docs don't currently use any
// mermaid fences, but this keeps the option available without extra setup
// if a future page adds an architecture/flow diagram.
document$.subscribe(function () {
  var scheme = document.body.getAttribute('data-md-color-scheme');
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: scheme === 'slate' ? 'dark' : 'default'
    });
  }
});
