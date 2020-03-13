const webpack = require('webpack')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['loadsh', 'jquery']
  },
  output: {
    path: `${__dirname}/dll`,
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: `${__dirname}/dll/[name].json`,
      name: '[name]_library'
    })
  ]
}