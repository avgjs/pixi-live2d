var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "pixi-live2d.js",
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
  externals: {
    "pixi.js": "PIXI"
  },
  plugins: [
    new webpack.BannerPlugin(fs.readFileSync('./LICENSE.txt', 'utf8')),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  }
};
