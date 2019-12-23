const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "index.min.js",
    path: path.resolve(__dirname, 'dist'),
    // library: 'jsUtilsHelper',
    // libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    // @see https://webpack.js.org/plugins/uglifyjs-webpack-plugin
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};