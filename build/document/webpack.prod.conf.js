var path = require('path')
var config = require('../../config')
var utils = require('../utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('../webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: './document/main.js'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.docBuild.productionSourceMap,
      extract: true
    })
  },
  optimization: {
    //取代 new UglifyJs Plugin
    minimizer: [
      // 压缩代码
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,//关闭debug
            drop_console: true,//关闭console
          },
          output: {
            comments: false // 关闭注释
          }
        },
        sourceMap: config.build.productionSourceMap,
        parallel: true
      }),
      // 可自己配置，建议第一次升级先不配置
      new OptimizeCSSPlugin({
        // cssProcessorOptions: config.build.productionSourceMap
        //     ? {safe: true, map: {inline: false}, autoprefixer: false}
        //     : {safe: true}
      })
    ],
    // 识别package.json中的sideEffects以剔除无用的模块，用来做tree-shake
    // 依赖于optimization.providedExports和optimization.usedExports
    sideEffects: true,
    // 取代 new webpack.optimize.ModuleConcatenationPlugin()
    concatenateModules: true,
    // 取代 new webpack.NoEmitOnErrorsPlugin()，编译错误时不打印输出资源。
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'vendors',
        },
        'async-vendors': {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          chunks: 'async',
          name: 'async-vendors'
        }
      }
    }
    // runtimeChunk: { name: 'runtime' }
  },
  devtool: config.docBuild.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.docBuild.assetsRoot,
    publicPath: '/light-ui/',
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.docBuild.env
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: true,
    }),
    new webpack.HashedModuleIdsPlugin(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.docBuild.index,
      template: 'document/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
      favicon: path.resolve(__dirname, '../../example/favicon.ico')
    })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig
