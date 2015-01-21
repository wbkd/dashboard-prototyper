/**
 * This module merges the default with config style and creates a styesheet 
 * with the certain css rules. We create a stylesheet instead of applying it 
 * to the elements via js, because we don't want to wait until the components 
 * got loaded.
 * 
 */

var dom = require('rdbutils').dom;
var merge = require('merge');
var fontLoader = require('./rdb-font-loader');

var defaultStyle = require('rdbDefault').style;

/*
 * Merges the default with config style and creates a styesheet with the certain 
 * css rules.
 * 
 * @param {object} newStyle Custom Style object
 */
module.exports.applyStyles = function(newStyle){
  
  var style = merge(defaultStyle, newStyle);
  
  createStylesheet(style);   
  fontLoader.loadFont(style.fontName);
}

function createStylesheet(style){
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
 * Helper method to create CSS Rule.
 * 
 * @param   {string} selector Name of the selector.
 * @param   {string} bg Value of the background style
 * @param   {string} col Value of the color style
 * @returns {string} CSS Rule
 */
function getCSSRule(selector, bg, col){
  return selector + '{ color :' + col + '; background: ' + bg + ';}';
}

