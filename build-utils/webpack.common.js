const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.env !== 'production';

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.env === 'dev',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new PrettierPlugin(),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  }
};