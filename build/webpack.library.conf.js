'use strict'
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var nodeExternals = require('webpack-node-externals')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    Calendar: path.resolve(__dirname, '../src/Calendar.js'),
    CalendarControls: path.resolve(__dirname, '../src/CalendarControls.js')
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'commonjs2'
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.scss', '.less'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ["css-loader", 'sass-loader']
          }
        ),
        include: [resolve('src')]
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ["css-loader", 'less-loader']
          }
        ),
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: '../lib/rfcalendar.less',
        allChunks: true
    }),
    new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
    }),
  ],
  node: {
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
