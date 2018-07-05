const path = require('path');

const express = require('express');

const app = express();

const webpack = require('webpack');

const webpackMiddleWare = require('webpack-dev-middleware');

let webpackConfig = require('./webpack.config');

let compiler = webpack(webpackConfig);

app.use(webpackMiddleWare(compiler, {
    publicPath: webpackConfig.output.publicPath
}));


app.listen(3333);


