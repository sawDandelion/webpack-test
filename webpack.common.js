const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

// add-asset-html-webpack-plugin 这个插件是用来把静态资源加在你的html后面的
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle-[hash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
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
        new AddAssetHtmlPlugin({
            filepath: path.join(__dirname, 'dll/vendor.dll.js') // 这个路径是你的dll文件路径
            // includeSourcemap: false  // 这里是因为我开启了sourcemap。 不这么写会报错。
        }),
        new VueLoaderPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                extensions: ['.js', '.vue']
            }
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            _: 'loadsh'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DllReferencePlugin({
            manifest: require('./dll/vendor.json')
        })
    ]
}
