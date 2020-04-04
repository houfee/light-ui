const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../../config')
const devWebpackConfig = require('../webpack.dev.conf')

const entry = config.docDev.entry
// add hot-reload related code to entry chunks
Object.keys(entry).forEach(function (name) {
  entry[name] = ['./build/dev-client'].concat(entry[name])
})

const docDevWebpackConfig = Object.assign({}, devWebpackConfig)
const index = docDevWebpackConfig.plugins.findIndex(function (plugin) {
  return plugin instanceof HtmlWebpackPlugin
})
docDevWebpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
  filename: 'index.html',
  template: config.docDev.template,
  inject: true,
  favicon: path.resolve(__dirname, '../../example/favicon.ico')
}))

docDevWebpackConfig.entry = entry

module.exports = docDevWebpackConfig
