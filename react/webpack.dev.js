var path = require('path');
var Merge = require('webpack-merge');
var common = require('./webpack.common.js');

function dev(env){
    return Object.assign({},common, {
        output:{
            path: path.resolve(__dirname,'prod'),
            filename: 'bundle.js',
            publicPath: 'assets'
        },
        devServer: {
            port: 9000,
            historyApiFallback:true        
        },    
    })
}
module.exports = dev("env");