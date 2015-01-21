/**
 * The Board renders its title and the belonging widgets. 
 */

var React = require('react');
var widgetFactory = require('../factories/rdb-widget-factory.jsx');

var Board = React.createClass({

  render: function() {
    
    var widgets = this.props.widgets.map(function(widget,i){
      return widgetFactory.create(widget);
    });
    
    return (
      <div className="rdb-board">
        <h1 className="rdb-board-title">{this.props.name}</h1>
        { widgets }
      </div>
    );
  }

});

module.exports = Board;