var webpack = require('webpack');
var config = require('../configuration');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var webpackOptions = {

    entry: {
        app: config.paths.entryFile,
        vendor: config.vendorsToBundleSeperately
    },

    output: {
        filename: 'assets/js/app-[chunkhash:6].js',
        path: config.paths.buildDir
    },

    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }]
    },

    plugins: [
        new CommonsChunkPlugin(
            'vendor',
            'assets/js/vendor-[chunkhash:6].js'
        ),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true
        })
    ]
};

module.exports = webpackOptions;
