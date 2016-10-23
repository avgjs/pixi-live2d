var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./example/index.js",
  output: {
    path: path.resolve(__dirname, './example-dist'),
    filename: "index.js",
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  plugins: [
    new webpack.BannerPlugin(fs.readFileSync('./LICENSE.txt', 'utf8')),
  ],
  devServer: {
    contentBase: './example/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  }
};
