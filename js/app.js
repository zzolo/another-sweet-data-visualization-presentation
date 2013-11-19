(function() {
  var path = 'bower_components/reveal.js/';

  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,
    touch: true,
    center: true,
    // default/cube/page/concave/zoom/linear/fade/none
    transition: Reveal.getQueryHash().transition || 'default',
    // default/fast/slow
    transitionSpeed: 'default',
    // default/linear/none
    backgroundTransition: 'default',
    // Optional libraries used to extend on reveal.js
    dependencies: [
      {
        src: path + 'lib/js/classList.js',
        condition: function() { return !document.body.classList; }
      },
      {
        src: path + 'plugin/markdown/marked.js',
        condition: function() { return !!document.querySelector( '[data-markdown]' ); }
      },
      {
        src: path + 'plugin/markdown/markdown.js',
        condition: function() { return !!document.querySelector( '[data-markdown]' ); }
      },
      {
        src: path + 'plugin/highlight/highlight.js',
        async: true,
        callback: function() { hljs.initHighlightingOnLoad(); }
      },
      {
        src: path + 'plugin/zoom-js/zoom.js',
        async: true,
        condition: function() { return !!document.body.classList; }
      },
      {
        src: path + 'plugin/notes/notes.js',
        async: true,
        condition: function() { return !!document.body.classList; }
      }
    ]
  });
})();