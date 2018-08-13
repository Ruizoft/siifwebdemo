const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'production',
    stats: {
        warnings: false
      },
    watch: false,
})

module.exports = config;
