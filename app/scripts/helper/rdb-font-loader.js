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

module.exports.init = function () {
  
  var fontName = style.font, 
    fontToLoad = fonts[fontName];
  
  if (typeof fontToLoad === 'undefined') {
    fontName = defaultFont;
    fontToLoad = fonts[fontName];
  }
  
  // download webfont
  handleWebfont(fontToLoad);
  
  // apply font family to body
  document.body.style.fontFamily = '"' + fontName + '", sans-serif';
};


// google webfont loader script
function handleWebfont(font){
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