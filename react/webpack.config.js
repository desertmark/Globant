module.exports = function(env) {
  return require(`./webpack.${env}.js`)
}
// var path = require('path');
// var combineLoaders = require('webpack-combine-loaders');
// module.exports = {
//     entry: './src/index.js',
//     output:{
//         path: path.resolve(__dirname,'prod'),
//         filename: 'bundle.js',
//         publicPath: 'assets'
//     },
//     devServer: {
//         port: 9000,
//         historyApiFallback:true        
//     },
//     module: {
//         loaders: [{
//             test: /\.jsx?$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader',
//             query: {
//                 presets: ['es2015', 'react']
//             }
//         },
//         {
//             test: /\.css?$/,
//             loader: combineLoaders([
//                 {
//                     loader: 'style-loader'
//                 },
//                 {
//                     loader: 'css-loader'
//                 }
//             ])
//         }]
//     }
// }