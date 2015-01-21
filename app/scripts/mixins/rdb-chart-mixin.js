var c3 = require('c3');

require('../../../node_modules/c3/c3.css');

var ChartMixin = {
  createChart: function (options) {
    // TODO: find a better way to get the keys.
    var keys = this.props.keys || Object.keys(this.props.data[0]);
    
    return c3.generate({
      bindto: '#' + this.props._id,
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