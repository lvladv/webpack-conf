const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === "development"

console.log(isDev)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js', //откуда стоит начать webpack - у
        analytics: './analytics.js',
    },
    output: {
        //куда складывать файлы
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: path.resolve(__dirname, 'favicon.ico'), to: path.resolve(__dirname, 'dist') },
        //     ],
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    // alias: {
    //     src: path.resolve(__dirname, 'src')
    // },  НАСТРОИТЬ НОРМАЛЬНО!
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                        },
                    }, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader'],
            }
        ]
    }
}