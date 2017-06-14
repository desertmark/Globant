var path = require('path');
var combineLoaders = require('webpack-combine-loaders');
module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css?$/,
            loader: combineLoaders([
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
            ])
        }]
    }
}