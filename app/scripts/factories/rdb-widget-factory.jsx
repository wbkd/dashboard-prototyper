var React = require('react');
var shortId = require('shortid');

module.exports.create = function(widget) {
  var Widget = require('../widgets/rdb-widget-' + widget.type + '.jsx');
  widget.properties._id = widget.type + '-' + shortId.generate();
  
  return <Widget key={widget.properties._id} {...widget.properties} />
};