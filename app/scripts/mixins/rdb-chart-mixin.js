var c3 = require('c3');

require('../../../node_modules/c3/c3.css');

var ChartMixin = {
  createChart: function (options) {
    // TODO: 
    var keys = this.props.keys || Object.keys(this.props.data[0]);
    
    return c3.generate({
      bindto: '#' + this.props._id,
      color: {
        pattern: [
         '#1f77b4',
         '#ff7f0e',
         '#2ca02c',
         '#d62728',
         '#9467bd',
         '#8c564b',
         '#e377c2',
         '#7f7f7f',
         '#bcbd22',
         '#17becf'
        ]
      },
      data: {
        json: this.props.data,
        type: options.type,
        keys: {
          value: keys
        }
      }
    });
  }
};


module.exports = ChartMixin;