const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'public/index': './src/client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  plugins: [
        new CopyWebpackPlugin([
          { from: path.resolve(__dirname, 'src/views/'),
            to: path.resolve(__dirname, 'dist/views/')},
          { from: path.resolve(__dirname, 'src/client/css/styles.css'),
            to: path.resolve(__dirname, 'dist/public/styles.css')},
          { from: path.resolve(__dirname, 'src/vendor/'),
            to: path.resolve(__dirname, 'dist/public/vendor')}
          ])
      ],
  module:{
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
            ]
  }
}
