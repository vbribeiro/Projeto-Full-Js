const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathToMain = require.resolve('./src/app.js');
const pathToIndexCss = require.resolve('./src/css/style.css');
const pathToIndexHtml = require.resolve('./src/index.html');
const pathToIndexFavicon = require.resolve('./src/img/favicon.ico');

module.exports = {
    entry: [
        '@babel/polyfill',
        pathToMain,
        pathToIndexCss,
        pathToIndexHtml,
        pathToIndexFavicon
    ],
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'css/[name][ext][query]'
                }
            },
            {
                test: /\.html$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'html/[name][ext][query]'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext][query]'
                }
            }
        ]
    },
}