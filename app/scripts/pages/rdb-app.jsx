var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Sidebar = require('../components/rdb-sidebar.jsx')

var App = React.createClass({
  render: function () {
    return (
      <div className="dashboard clearfix">
        <Sidebar />
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;