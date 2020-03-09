const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader'
      }]
    }, {
      test: /\.js$/,
      enforce: 'pre',

      loader: 'eslint-loader',
      options: {
        emitWarning: true,
      },
    }]
  },
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        extensions: ['.js', '.vue']
      }
    })
  ]
}