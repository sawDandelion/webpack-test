const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: `bundle-[hash].js`,
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
        emitWarning: true
      },
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'template/index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        extensions: ['.js', '.vue']
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}