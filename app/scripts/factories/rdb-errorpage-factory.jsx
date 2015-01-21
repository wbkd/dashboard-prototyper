/**
 * Factory that creates error pages.
 */

var React = require('react');
var Error = require('../pages/rdb-errorpage.jsx');

module.exports.create = function(props) {
  return React.createClass({
    render: function() { 
      return <Error {...this.props} {...props} /> 
    }
  })
};