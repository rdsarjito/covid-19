const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: path.resolve(__dirname, '../dist'),
                            hmr: process.env.NODE_ENV === 'development',
                        },
               
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    /* plugins */
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: process.env.NODE_ENV === 'development' ? '[name].css' : 'main.[hash].css',
            chunkFilename: process.env.NODE_ENV === 'development' ? '[id].css' : 'chunk.[hash].css',
        }),
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}