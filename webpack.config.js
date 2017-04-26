var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

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
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=public/fonts/[name].[ext]'
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
        // Copy images to the images folder in dev
        test: /\.(svg|ico|png|jpg|jpeg)$/,
        loader: 'file-loader?name=app/assets/images/[name].[ext]'
      }
    ]
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
    },
  plugins: [
      new CopyWebpackPlugin([
          // Copy relevant files over to build
          // Specifically files we don't want in a bundle
          {
              from: './app/frontEnd.jsx'
          },
          {
              from: './app/stream.js'
          },
          {
              from: './app/python.json'
          }
      ]),
      HTMLWebpackPluginConfig,
      new WebpackCleanupPlugin() // Gets rid of old build files.
  ]
};
