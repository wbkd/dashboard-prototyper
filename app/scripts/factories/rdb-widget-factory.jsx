/**
 * Factory that creates Widget objects with a unique key.
 */

var React = require('react');
var utils = require('rdbutils');
var shortId = require('shortid');

module.exports.create = function(widget) {
  var Widget = require('../widgets/' + widget.type + '/index.jsx');
    
  if(utils.isUndefined(widget.properties)){
    widget.properties = {};
  }
  
  widget.properties._id = widget.type + '-' + shortId.generate();
  
  return <Widget key={widget.properties._id} {...widget.properties} />
};