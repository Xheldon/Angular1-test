let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.min.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'a.html',

        })
    ]
};