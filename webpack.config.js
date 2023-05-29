const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const miniCssExtract = require('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js',
    output: {
        filename:  'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(sa|c|sc)ss$/, 
                use: [
                    miniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new miniCssExtract({
            filename: 'style.css'
        })
    ]
}