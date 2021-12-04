const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './production'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'production'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            // JavaScript
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        cacheDirectory: true,
                    },
                }],
                resolve: {
                    extensions: ['.js', '.jsx']
                },
            },
            // Изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            //Шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, Sass
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            // JSON
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader',
                type: 'javascript/auto',
            },
        ],
    }
};