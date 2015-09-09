'use strict';

var config = require('../configuration');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackOptions = {
    entry: [
        'webpack/hot/dev-server',
        config.paths.entryFile
    ],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [config.paths.nodeModulesDir],
            loader: 'babel?optional[]=es7.decorators!eslint'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true,
            devServer: 'http://localhost:8080/webpack-dev-server.js'
        })
    ]
};

module.exports = webpackOptions;
