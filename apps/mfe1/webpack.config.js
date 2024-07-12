const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  performance: {
    hints: false,
  },
  devtool: 'source-map',
  entry: './src/mfe1.tsx',
  output: {
    library: 'mfe1',
    libraryTarget: 'umd',
    filename: 'mfe1.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:4201/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4201,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
