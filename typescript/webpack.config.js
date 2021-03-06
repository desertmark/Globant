// var path = require("path");
var combineLoaders = require('webpack-combine-loaders');
// module.exports = {
//     entry: './ClientApp/index.ts',
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js', '.jsx']
//     },
//     module: {
//         loaders: [{
//             test: /\.tsx?$/,
//             exclude: /node_modules/,
//             loader: 'awesome-typescript-loader',
//             query:{
//                 presets: ['es2015','react']
//             }
//         },{
//             test: /\.css?$/,
//             loader: combineLoaders([{
//                 loader: 'style-loader',
//             },{
//                 loader:'css-loader'
//             }])
//         }]
//     },
//     output:{
//         path: path.resolve(__dirname,'prod'),
//         filename:'client.js',
//     }
// }

module.exports = {
    entry: "./ClientApp/index.tsx",
    output: {
        filename: "ClientApp.js",
        path: __dirname + "/prod"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json",]
    },

    module: {
        loaders:[
            {
            test: /\.css?$/,
            loader: combineLoaders([{
                loader: 'style-loader',
            },{
                loader:'css-loader'
            }])
        }],
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};