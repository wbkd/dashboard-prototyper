// available fonts
var fonts = {
  'Droid Sans' : 'Droid+Sans:400,700:latin',
  'Lato' : 'Lato:400,700:latin',
  'PT Sans': 'PT+Sans:400,700:latin',
  'Roboto': 'Roboto:400,700:latin',
  'Open Sans': 'Open+Sans:400,700:latin'
};

var defaultFont = require('rdbDefault').style.font;

/**
 * Loads related font. If the passed font name is not in the fonts list, 
 * we load the default font.
 * 
 * @param {string} fontName Name of the font we want to load. Has to be
 *                          in the 'fonts' list.
 */
module.exports.loadFont = function (fontName) {
  
  var fontToLoad = fonts[fontName];
  
  if (typeof fontToLoad === 'undefined') {
    fontName = defaultFont;
    fontToLoad = fonts[fontName];
  }
  
  loadWebfont(fontToLoad);
  
  document.body.style.fontFamily = '"' + fontName + '", sans-serif';
};


/**
 * Helper method that downloads google web font.
 * @param {string} font Font identifier and font weights.
 */
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