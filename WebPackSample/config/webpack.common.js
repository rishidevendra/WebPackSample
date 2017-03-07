var webPack = require('webpack');
var htmlWebPack = require('html-webpack-plugin');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var config = {
    entry: {
        'app': './scripts/main.ts',
        'libs': './scripts/vendor.ts',
        'polyfills': './scripts/polyfills.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.css', '.json']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-load-children-loader']
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.css$/,
            exclude: path.resolve('deps', 'app'),
            loader: "style-loader!css-loader?root=."
        },
        {
            test: /\.(jpg|png|gif)$/,
            use: 'file-loader'
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test: /\.(woff2?|ttf|eot|svg)$/,
            loader: 'url-loader?limit=10000'
        },
        {
            test: /bootstrap\/dist\/js\/umd\//,
            loader: 'imports-loader?jQuery=jquery'
        }
        ]
    },
    plugins: [
       new webPack.optimize.CommonsChunkPlugin({
           name: ['app', 'libs', 'polyfills']
       }),
       // htmlWebPack plugin automatically injects webpack bundles into html page
       // This is especially useful for webpack bundles that include a hash in the filename which changes every
       // compilation.
       // Commented this to make application work when hosted in IIS.
       //new htmlWebPack({
       //    template: './index.html'
       //}),
       new webPack.ProvidePlugin({
           jQuery: 'jquery',
           $: 'jquery',
           jquery: 'jquery'
       })
    ],
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].bundle.js',
    },
};

module.exports = function () { return config };