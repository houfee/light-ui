var path = require('path')
var fs = require('fs')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var modules = {}
var cPath = path.join(__dirname, '../src/modules')
var files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function (name) {
    var p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}

var webpackConfig = merge(baseWebpackConfig, {
  mode: JSON.parse(config.dev.env.NODE_ENV),
  entry: modules,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: {
        publicPath: '../'
      }
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name]/index.js'),
    library: ['fee', '[name]'],
    libraryTarget: 'umd'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('[name]/style.css')
    }),
  ]
})

module.exports = webpackConfig
