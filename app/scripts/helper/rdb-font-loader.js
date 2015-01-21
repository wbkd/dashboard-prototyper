var style = require('rdbconf').style;

// available fonts
var fonts = {
  'Droid Sans' : 'Droid+Sans:400,700:latin',
  'Lato' : 'Lato:400,700:latin',
  'PT Sans': 'PT+Sans:400,700:latin',
  'Roboto': 'Roboto:400,700:latin',
  'Open Sans': 'Open+Sans:400,700:latin'
};

var defaultFont = 'PT Sans';

module.exports.loadFont = function (fontName) {
  
  var fontToLoad = fonts[fontName];
  
  if (typeof fontToLoad === 'undefined') {
    fontName = defaultFont;
    fontToLoad = fonts[fontName];
  }
  
  // download webfont
  loadWebfont(fontToLoad);
  
  // apply font family to body
  document.body.style.fontFamily = '"' + fontName + '", sans-serif';
};


// google webfont loader script
function loadWebfont(font){
  window.WebFontConfig = {
    google: {
      families: [font]
    }
  };
  
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';

  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
}