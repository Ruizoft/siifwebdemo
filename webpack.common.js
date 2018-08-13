const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const helpers = require('./helpers');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
    entry: {
      vendor: ['babel-polyfill'],
      app: ['./src/main.ts'],
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      publicPath: '/public/',
    },
    resolve: {
      extensions: ['.ts', '.js', '.html']
    },  
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'tslint-loader'
      },
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader!ts-loader'
        },
        {
          test: /\.html$/, 
          use: [ 
            { 
              loader: 'html-loader?exportAsEs6Default', 
              }
            ]
          },
        {
          test: /\.handlebars$/,
          loader: 'handlebars-loader',
        },
        {
          test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/public/',
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix',
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'less-loader', // compiles Less to CSS
              options: { javascriptEnabled: true },
            },
          ],
        },
        {
          test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: '/public/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new AngularCompilerPlugin({
        tsConfigPath: 'tsconfig.json',
        skipCodeGeneration: true,
        sourceMap: true
     }),
      // new CopyWebpackPlugin([
      //   { from: 'src/sw.ts' },
      // ]),
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, 'src/sw.ts'),
      }),
    ],
  };