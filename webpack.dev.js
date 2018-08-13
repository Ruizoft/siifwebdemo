const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'development',
    stats: {
        warnings: false
      },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: '0.0.0.0',
        port: 3001,
        watchContentBase: true,
        historyApiFallback: true,
      },
})

module.exports = config;
