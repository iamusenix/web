'use strict';

var webpack = require('webpack');
var plugins = require('webpack-load-plugins')();
const merge = require('webpack-merge');

var baseConfig = require('./webpack.config.base.js')();

var devConfig = {

    devtool: false,

    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
        chunkFilename: '[name].js'
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            mangle: true,
            compress: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(process.env.ENV),
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'API_HOST':JSON.stringify('app.sharetome.com')
            }
        })
    ],
    stats:{
        assets: true,
        assetsSort: "field",
        cached: true,
        colors: true,
        chunks: true,
        chunkModules: true,
        errors:true,
        errorDetails:true,
        modules: true,
        timings: true,
    }

};


module.exports = merge( baseConfig,devConfig);
