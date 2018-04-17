const prodWebpackConfig = require('./impl/prod.config')
const devWepbackConfig = require('./impl/dev.config')

const shearsDefaultConfig = require('../shears.config')

module.exports = function(shearsConfig = {}) {
  return function(webpackEnv = {}) {
    shearsConfig = Object.assign({}, shearsDefaultConfig, shearsConfig) // merge in defaults
    const isProd = webpackEnv && webpackEnv.production
    if (isProd) {
      return prodWebpackConfig(shearsConfig)
    }
    return devWepbackConfig(shearsConfig)
  }
}