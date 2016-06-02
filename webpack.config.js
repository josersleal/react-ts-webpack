/* global require, module, __dirname */
var path = require('path');

var config = {
    entry: ["./src/app.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node-modules/
            }
        ]
    }
};
module.exports = config;
