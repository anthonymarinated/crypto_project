const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //change to development so page reloads everytime there is a change
    mode: 'development',
    entry: [
        //entry point of app
        'regenerator-runtime/runtime.js','./client/index.js',

    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        }),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
            publicPath: '/build',
        },
        proxy: {
          '/api': 'http://localhost:3000'
        }
    },
    module: {
        rules: [
          {
            // /\.jsx?/,
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            },
          },
          {
            test: /.(css|scss)$/, // /\.s?css/,  
            exclude: /node_modules/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
        ]
      },
}