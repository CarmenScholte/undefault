const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/undefault.js',
  output: {
    filename: 'undefault.js',
    path: path.resolve(__dirname, ''),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  // plugin: [
  //   new MiniCssExtractPlugin({
  //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
  //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
  //   })
  // ]
};