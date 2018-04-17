const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const baseWebpackConfig = require('./base.config')

module.exports = function(shearsConfig) {
  shearsConfig.entryPoint = shearsConfig.hmrEntryPoint || shearsConfig.entryPoint
  const webpackConfig = baseWebpackConfig(Object.assign(shearsConfig, {
    eslintLoaderOptions: { emitWarning: true },
    babelPlugins: [ 'react-hot-loader/babel' ]
  }))
  webpackConfig.mode = 'development'
  webpackConfig.plugins.push(new ExtractTextWebpackPlugin({ disable: true }))
  return webpackConfig
}