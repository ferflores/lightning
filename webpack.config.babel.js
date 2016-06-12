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
          { from: path.resolve(__dirname, 'src/client/styles.css'),
            to: path.resolve(__dirname, 'dist/public/styles.css')}
          ])
      ],
  module:{
    loaders: [
      {
        test: /index\.js/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src/server'),
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
            ]
  }
}
