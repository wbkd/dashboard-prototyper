var path = require('path');

var entry = './app/scripts/main.js',
  output = {
    path: __dirname,
    filename: 'main.js'
  };

module.exports.development = {
    debug : true,
    devtool : 'eval',
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.jsx?$/, loader: 'jsx-loader?harmony' },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.png$/, loader: 'file-loader' }
        ]
    },
    resolve : {
      alias : {
        rdbconf: path.resolve(__dirname, 'app/scripts/config/rdb-config.js'),
        rdbutils: path.resolve(__dirname, 'app/scripts/helper/rdb-utils.js'),
        WidgetMixin: path.resolve(__dirname, 'app/scripts/mixins/rdb-widget-mixin.jsx')
      }
    } 
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    module : {
        loaders : [
            { test: /\.jsx?$/, loader: 'jsx-loader?harmony' }
        ]
    }
};