const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    main: './main.js'
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    library: '[name]'
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
    new UglifyJSPlugin({
      exclude: /\/node_modules/
    })
  ]
};
