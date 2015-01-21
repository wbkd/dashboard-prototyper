/**
 * Factory that creates Board objects.
 */

var React = require('react');
var Board = require('../components/rdb-board.jsx');

module.exports.create = function(props) {
  return React.createClass({
    render: function() { 
      return <Board {...this.props} {...props} /> 
    }
  })
};