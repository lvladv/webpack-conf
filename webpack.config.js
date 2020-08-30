const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry:{
      main:   './src/index.js', //откуда стоит начать webpack - у
      analytics:  './src/analytics.js',
    } ,
    output: {
        //куда складывать файлы
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html' 
        }),
        new CleanWebpackPlugin(),
    ]
}