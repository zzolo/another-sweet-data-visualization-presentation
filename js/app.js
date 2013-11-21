(function() {
  var path = 'bower_components/reveal.js/';
  var map;
  var $map = $('#custom-map-overlay');
  var layer;

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

  // Add some custom plugins
  Reveal.addEventListener('slidechanged', function(e) {
    var $slide = $(e.currentSlide);
    var pos = $slide.data('mapPosition');

    if ($slide.data('map')) {
      $map.addClass('enabled');
      if (_.isUndefined(map)) {
        map = L.map('custom-map-overlay', {
          keyboard: false
        });
      }
      if (!_.isUndefined(layer)) {
        map.removeLayer(layer);
      }
      layer = L.tileLayer($(e.currentSlide).data('map'));
      map.addLayer(layer);

      if (pos) {
        map.setView([parseFloat(pos.split(',')[0]), parseFloat(pos.split(',')[1])], parseInt(pos.split(',')[2]), { reset: true });
      }
      else {
        map.setView([44.9668187413725, -93.15680672123563], 11, { reset: true });
      }
    }
    else {
      $map.removeClass('enabled');
    }
  });

  Reveal.addEventListener('slidechanged', function(e) {
    var $slide = $(e.currentSlide);

    $slide.find('img.full-image, img.full-image-high').each(function() {
      if ($(this).height() > $slide.height()) {
        $(this).height($slide.height()).css('width', 'auto');
      }
    });
  });
})();