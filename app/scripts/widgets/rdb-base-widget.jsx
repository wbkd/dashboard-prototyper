/**
 * Widgets can use this class to display their content.
 * Usage: <BaseWidget { ...this.props } widget={ widget }/>
 */

var React = require('react');
var WidgetMixin = require('WidgetMixin');

var BaseWidget = React.createClass({
  mixins: [WidgetMixin],

  render: function() {    
    return (
      <div className="rdb-widget-wrapper">
        <div className="rdb-widget-content">
          { this.getTitle() }
          { this.props.widget }
        </div>
      </div>
    );
  }

});

module.exports = BaseWidget;