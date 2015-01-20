var path = require('path');
var merge = require('merge');

var defaultConfig = {
  entry: './app/scripts/main.js',
  output: {
    path: __dirname,
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      rdbconf: path.resolve(__dirname, 'app/scripts/config/rdb-config.js'),
      rdbutils: path.resolve(__dirname, 'app/scripts/helper/rdb-utils.js'),
      WidgetMixin: path.resolve(__dirname, 'app/scripts/mixins/rdb-widget-mixin.jsx'),
      BaseWidget: path.resolve(__dirname, 'app/scripts/widgets/rdb-base-widget.jsx'),
    }
  }
}

module.exports.development = merge({
  debug: true,
  devtool: 'eval'
}, defaultConfig);

module.exports.production = merge({
  debug: false
}, defaultConfig);