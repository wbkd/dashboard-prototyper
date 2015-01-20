var merge = require('merge');
var dom = require('rdbutils').dom;

var configStyle = require('rdbconf').style;
var defaultStyles = {
    titlebg : '#eeeeee',
    titlecol : '#222222',
    sidebarbg : '#303030',
    sidebarcol : '#f4f4f4',
    boardbg : '#f4f4f4',
    boardcol : '#222222'
}

module.exports.init = function(){
  
  var style = merge(defaultStyles,configStyle);
  
  // we create a stylesheet here because we don't want to wait until a certain component is loaded
  // TODO: is there a better way to apply the styles?!
  
  var stylesheet = document.createElement('style');
  
  stylesheet.type = 'text/css';
  stylesheet.innerHTML = 
    getCSSRule('.rdb-title', style.titlebg, style.titlecol) + 
    getCSSRule('.rdb-sidebar a', style.sidebarbg, style.sidebarcol) + 
    getCSSRule('.rdb-sidebar', style.sidebarbg, style.sidebarcol) + 
    getCSSRule('.rdb-board', style.boardbg, style.boardcol);
  
  dom.get('head').appendChild(stylesheet);
}


function getCSSRule(selector, bg, col){
  return selector + '{ color :' + col + '; background: ' + bg + ';} ';
}