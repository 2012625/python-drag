const path = require('path')

module.exports = {
  entry: {
    blockly: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'myLib',
    libraryTarget: 'umd'
  }
}
