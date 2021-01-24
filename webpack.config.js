const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output:{
        filename: 'main.bundle.js',
        path: __dirname +  '/dist',
        publicPath: '',
        assetModuleFilename: 'asset/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /[.]ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /[.]html$/,
                use: ['html-loader']
            },
            {
                test: /[.]scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
    ],
    resolve: {
        extensions: ['.ts','.js']
    }
}
