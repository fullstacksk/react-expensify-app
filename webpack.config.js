const path = require('path');
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'public'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.s?css$/
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}