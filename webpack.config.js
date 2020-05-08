
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  },
  externals: {
    fs: 'fs',
    crypto: 'crypto',
    path: 'path'
  },
  devtool: 'inline-source-map',
  plugins: [],
};