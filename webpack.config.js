const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        todo: './src/todo.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[name][ext][query]',
        clean: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    process.env.NODE_ENV === 'development' ?
                        'style-loader' :
                        MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env']
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    devServer: {
        open: true,
        hot: false,
        liveReload: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/html/index.html',
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            filename: './todo.html',
            template: './src/html/todo.html',
            chunks: ['todo']
        }),
        new MiniCssExtractPlugin({
            filename: './assets/styles/[name].[contenthash].css'
        }),
    ]
}