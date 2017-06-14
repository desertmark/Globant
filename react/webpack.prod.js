var path = require('path');
var Merge = require('webpack-merge');
var common = require('./webpack.common.js');

function prod(env){

    return Merge(common, {
        output:{
                path: path.resolve(__dirname,'prod'),
                filename: 'bundle.js',
                publicPath: 'assets'
        },        
        // plugins:[
        //     new webpack.optimize.UglifyJsPlugin({
                
        //     })
        // ]
    });
}
module.exports = prod("prod");