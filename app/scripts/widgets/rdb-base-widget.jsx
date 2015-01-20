var React = require('react');
var WidgetMixin = require('WidgetMixin');

var Widget = React.createClass({
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

module.exports = Widget;