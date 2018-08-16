'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
//var plugins = require('webpack-load-plugins')();
var path = require('path');
const env = process.env.NODE_ENV;
const isDevMode = env == 'development';

function getBaseConfiguration(options) {
    return {

        resolve: {
            modules: [
                path.join(__dirname, "../src"),
                path.join(__dirname, "../node_modules")
              ]
        },
        //devtool: 'cheap-module-eval-source-map',

        entry: {
            'app': 'app.js'
        },

        output: {
            path: path.join(__dirname, "../dist")
        },
        externals: {
            jquery: "jQuery"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: [/node_modules/],
                    use: {
                        loader:'babel-loader',
                        options:{
                            sourceMap:true,
                            //presets: ["es2015","stage-2", "react" ],
                            plugins: [
                                "add-module-exports",
                                ['import', [{ libraryName: "antd", style: 'css' }]]
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/,
                    use: ["file-loader?name=[name].[ext]"]
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader']
                },
                {
                    test: /\.(scss|sass)$/,
                    use: ['style-loader', 
                        {
                            loader:'css-loader',
                            options:{
                                modules: true,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                camelCase:'dashesOnly',
                                importLoaders:2,
                                sourceMap:isDevMode
                            }
                        }, 
                        'postcss-loader', 'sass-loader']
                },
                {
                    test: /\.js$/,
                    use: ['eslint-loader'],
                    exclude: [/node_modules/]
                }
            ]
        }

    };
}

module.exports = getBaseConfiguration;
