const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    main: './src/index.js',
    hello: './src/post.js'
},

mode: 'development',
devtool: 'inline-source-map',
//todo посмотреть что можно добавить 
devServer: {
  contentBase: './dist',
},

plugins: [
    //todo посмотреть что можно добавить 
    new CleanWebpackPlugin(),
     // не видит css
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], //todo посмотреть что можно добавить 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', //todo посмотреть что можно добавить 
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', //todo посмотреть что можно добавить 
      }
    ],
  },
};