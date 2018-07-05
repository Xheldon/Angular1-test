let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[hash:8].js'
    },
    module: {
        rules: [{
            test: /\.ejs$/, // 因为要设置 html 为某个路由的 views 所以需要 import 进来 所以需要 html-loader, 但是他妈的 html-loader 不支持排除某个目录, 结果把 模板文件 index.html 也给load了, 结果就是编码出来的都是转义后的字符串输出了
            use: {
                loader: 'ejs-compiled-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'ejs-compiled-loader!./src/index.html',
            data: {
                build: true
            },
            inject: true
        })
    ]
};