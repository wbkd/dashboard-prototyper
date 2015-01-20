var React = require('react');
var ChartMixin = require('../mixins/rdb-chart-mixin.js');
var WidgetMixin = require('WidgetMixin');

var Widget = React.createClass({
  mixins: [ChartMixin, WidgetMixin],

  componentDidMount: function () {
    this.createChart({ type : 'bar' });
  },
  
  render: function() {
      
    return (
      <div className="rdb-widget-wrapper rdb-widget-list">
        <div className="rdb-widget">
          <div id={this.props._id}></div>
        </div> 
      </div>
    );
  }

});

module.exports = Widget;