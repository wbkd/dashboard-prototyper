var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

require('./helper/rdb-font-loader').init();
require('./helper/rdb-styler').init();

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});