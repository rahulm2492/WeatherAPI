const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpg|png|svg|gif)$/, loader: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      { test: /\.scss$/,loaders: ['style-loader', 'css-loader', 'sass-loader'] }
      
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool:'source-map'
}