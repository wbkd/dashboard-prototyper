/**
 * Entry point of RDB.
 */

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

var style = require('rdbconf').style;

require('./helper/rdb-styler').applyStyles(style);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});