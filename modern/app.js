const path = require('path');

const express = require('express');

let ejs = require('ejs');

const app = express();

const webpack = require('webpack');

const webpackMiddleWare = require('webpack-dev-middleware');

let webpackConfig = require('./webpack.config');

app.engine('html', ejs.renderFile);

app.set('views', path.join(__dirname, 'src/html'));

app.set('view engine', 'html');

let compiler = webpack(webpackConfig);

app.use(webpackMiddleWare(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.listen(3333);


