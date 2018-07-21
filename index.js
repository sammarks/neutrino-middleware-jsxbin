const JSXBinWebpackPlugin = require('jsxbin-webpack-plugin')

module.exports = (neutrino, { pluginId = 'jsxbin', ...options } = {}) => {
  neutrino.config
    .plugin(pluginId)
    .use(JSXBinWebpackPlugin, [{
      test: neutrino.regexFromExtensions(),
      ...options
    }])
}
