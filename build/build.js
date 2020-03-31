'use strict'
require('shelljs/global')
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

const ora = require('ora')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('./utils')
const webpackConfig = require('./webpack.prod.conf')
const webpackModulesConfig = require('./webpack.modules.conf')

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath)

function buildPack(webpackConfig, cb, spinnerText) {
  let spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    cb && cb()
  })
}
// console.log(webpackConfig.plugins)
function fullBuild(cb) {
  // build index.js
  buildPack(webpackConfig, function () {

    // build light.min.js
    webpackConfig.mode = JSON.parse(config.build.env.NODE_ENV)
    webpackConfig.output.filename = utils.assetsPath('[name].min.js')
    webpackConfig.output.chunkFilename = '[name].min.js'
    webpackConfig.plugins.splice(1, 2, 
      new webpack.DefinePlugin({ // 允许创建一个在编译时可以配置的全局常量。
        'process.env': config.build.env
      }),
      new MiniCssExtractPlugin({
        filename: utils.assetsPath('[name].min.css')
      }),
      new VueLoaderPlugin()
    )
    buildPack(webpackConfig, function () {
      cb && cb()
    }, 'building for light.min.js')
  }, 'building for index.js')
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(webpackModulesConfig, function () {

    // build ${module}/${module}.min.js
    webpackModulesConfig.mode = JSON.parse(config.build.env.NODE_ENV)
    webpackModulesConfig.output.filename = utils.assetsPath('[name]/[name].min.js')
    webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
    webpackModulesConfig.plugins.splice(1, 2,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new MiniCssExtractPlugin({
        filename: utils.assetsPath('[name]/[name].min.css')
      }),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      }),
      new VueLoaderPlugin()
    )
    buildPack(webpackModulesConfig, null, 'building for ${module}/${module}.min.js')
  }, 'building for ${module}/index.js')
}

fullBuild(modulesBuild)
