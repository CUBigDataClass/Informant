var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: __dirname + '/app/index.js',
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:
          {
            presets:['react']
          }
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
          test: /\.json$/,
          loader: 'json-loader'
      },
      {
        test: /\.(svg|ico|png|jpg|jpeg)$/,
        loader: 'file-loader?name=app/assets/images/[name].[ext]'
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
    },
  plugins: [HTMLWebpackPluginConfig]
};
