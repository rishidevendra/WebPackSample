const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

var webPack = require('webpack');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        plugins: [
            new webPack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
                options: {
                    htmlLoader: {
                        minimize: true,
                        removeAttributeQuotes: false,
                        caseSensitive: true,
                        customAttrSurround: [
                          [/#/, /(?:)/],
                          [/\*/, /(?:)/],
                          [/\[?\(?/, /(?:)/]
                        ],
                        customAttrAssign: [/\)?\]?=/]
                    },

                }
            }),
            new webPack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webPack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            })
        ]
    })
}