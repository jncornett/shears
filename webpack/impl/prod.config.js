const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')

const baseWebpackConfig = require('./base.config')

module.exports = function(shearsConfig) {
  const webpackConfig = baseConfig(Object.assign(shearsConfig, {
    eslintLoaderOptions: { failOnError: true }
  }))
  webpackConfig.mode = 'production'
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }))
  webpackConfig.plugins.push(new ExtractTextWebpackPlugin('styles.css'))
  webpackConfig.plugins.push(new MinifyPlugin({}, { test: /\.jsx?$/ }))
  return webpackConfig
}
