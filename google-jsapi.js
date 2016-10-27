// <script type="text/javascript" src="//www.google.com/jsapi"></script>

google.load('webfont','1');

google.setOnLoadCallback(function() {
  WebFont.load({
    google		: {
      families	: ['Montserrat','Concert One']
    },
    fontactive	: function(fontFamily, fontDescription) {
      init();
    },
    fontinactive	: function(fontFamily, fontDescription) {
      init();
    }
  });
});
