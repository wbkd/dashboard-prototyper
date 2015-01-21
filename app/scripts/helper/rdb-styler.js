/**
 * This module merges the default with config style and creates a styesheet 
 * with the certain css rules. We create a stylesheet instead of applying it 
 * to the elements via js, because we don't want to wait until the components 
 * got loaded.
 * 
 */

var dom = require('rdbutils').dom;
var merge = require('merge');

// should we do this in a new file?
var defaultStyle = {
    titlebg : '#eeeeee',
    titlecol : '#222222',
    sidebarbg : '#303030',
    sidebarcol : '#f4f4f4',
    boardbg : '#f4f4f4',
    boardcol : '#222222',
    widgetbg: '#fff',
    widgetcol: '#222'
};

module.exports.applyStyles = function(newStyle){
  
  var style = merge(defaultStyle, newStyle);
  
  // we create a stylesheet here because we don't want to wait until a certain component is loaded
  // TODO: is there a better way to apply the styles?!
  
  var stylesheet = dom.create('style');
  
  stylesheet.type = 'text/css';
  stylesheet.innerHTML = [
    getCSSRule('.rdb-title', style.titlebg, style.titlecol),
    getCSSRule('.rdb-sidebar a', style.sidebarbg, style.sidebarcol), 
    getCSSRule('.rdb-sidebar', style.sidebarbg, style.sidebarcol),
    getCSSRule('body', style.boardbg, style.boardcol), 
    getCSSRule('.rdb-widget-content', style.widgetbg, style.widgetcol)
  ].join('');
  
  dom.get('head').appendChild(stylesheet);
}

/**
 * Helper method to create CSS Rule
 * @param   {string} selector Name of the selector.
 * @param   {string} bg Value of the background style
 * @param   {string} col Value of the color style
 * @returns {string} The CSS Rule
 */
function getCSSRule(selector, bg, col){
  return selector + '{ color :' + col + '; background: ' + bg + ';}';
}

