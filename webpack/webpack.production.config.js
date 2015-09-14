var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');
var replace = require("replace");
var config = require('../configuration');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

var webpackOptions = {

    entry: {
        app: config.paths.entryFile,
        vendor: config.vendorsToBundleSeperately
    },

    output: {
        filename: 'assets/js/[name]-[chunkhash:6].js',
        path: config.paths.buildDir
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),

        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest'
        }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: config.paths.index,
            inject: true
        }),

        function () {
            this.plugin('done', function (stats) {
                var manifestPath = path.join(config.paths.buildDir, 'chunk-manifest.json');
                var indexPath = path.join(config.paths.buildDir, 'index.html');

                replace({
                    regex: 'WEBPACK_MANIFEST_TEMPLATE',
                    replacement: fs.readFileSync(manifestPath, 'utf8'),
                    paths: [indexPath],
                    recursive: false,
                    silent: true,
                });

                fs.unlinkSync(manifestPath);
            });
        }
    ]
};

module.exports = webpackOptions;
