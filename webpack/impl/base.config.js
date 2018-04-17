const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = function({
  browserTargets,
  entryPoint,
  indexHtml,
  eslintLoaderOptions,
  babelPlugins
}) {
  return {
    entry: [ 'babel-polyfill', entryPoint ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: browserTargets
                    }
                  }
                ],
                'stage-0',
                'react'
              ],
              plugins: babelPlugins || []
            }
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: {
            loader: 'eslint-loader',
            options: eslintLoaderOptions,
          },
        },
        {
          test: /\.css$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({ template: indexHtml }),
      new webpack.ProvidePlugin({
        React: 'react',
        Component: ['react', 'Component'],
        PropTypes: 'prop-types',
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }
}