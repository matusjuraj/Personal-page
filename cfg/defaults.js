/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;

const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'source-map-loader'
      }
    ],
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract("style", "css!stylus")
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
