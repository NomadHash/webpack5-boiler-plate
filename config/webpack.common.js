const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: `${path.resolve(__dirname, '../src')}/index.tsx`,
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${path.resolve(__dirname, '../src/public')}/index.html`,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..src/'),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
        alias: {
            '@src': path.resolve('src/'),
            '@components': path.resolve('src/components/'),
            '@lib': path.resolve('src/lib'),
        },
    },
};
