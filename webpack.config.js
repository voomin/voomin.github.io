const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    clean: true,
    crossOriginLoading: 'anonymous',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns: [
        { from: 'src/js', to: 'js' },
        { from: 'src/css', to: 'css' },
        { from: 'src/assets', to: `assets` },
      ]
    }),
  ]
};
