var React = require('react');
var ChartMixin = require('../../mixins/rdb-chart-mixin.js');
var BaseWidget = require('BaseWidget');

var Widget = React.createClass({
  mixins: [ChartMixin],
  
  getDefaultProps: function(){
    return {
      data : [{ alpha: 100, beta : 120, gamma: 110 },{ alpha: 120, beta : 110, gamma: 90 },{ alpha: 75, beta : 100,gamma: 80 },
              { alpha: 100, beta : 120, gamma: 110 },{ alpha: 120, beta : 110, gamma: 90 },{ alpha: 75, beta : 100,gamma: 80 }]
    }
  },
  
  propTypes: {
    data: React.PropTypes.array
  },
  
  componentDidMount: function () {
     this.chart = this.createChart({ type : 'line' });
  },
  
  componentWillUnmount: function(){
    this.chart = this.chart.destroy();
  },
  
  render: function() {
    
    var style = { padding : '1rem' },
        widget = (
          <div style={ style }>
            <div className="rdb-widget">
              <div id={ this.props._id }></div>
            </div> 
          </div>);

    return (
      <BaseWidget { ...this.props } widget={ widget }/>
    );
  }
});

module.exports = Widget;