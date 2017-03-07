const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

var path = require('path');
module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devtool: 'cheap-module-source-map',
        output: {
            path: './dist',
            publicPath: '/dist/',
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].map'
        }
        ,
        devServer: {
            port: 7777,
            host: 'localhost',
            historyApiFallback: true,
            noInfo: false,
            stats: 'minimal',
            publicPath: '/'
        }
    })
}