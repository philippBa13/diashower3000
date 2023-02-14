// import CopyPlugin from 'copy-webpack-plugin';
// import path from 'path';
import type { Configuration } from 'webpack';

import { plugins } from './webpack.plugins';
import { rules } from './webpack.rules';

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader']

});

rules.push({
  test: /\.jsx?$/,
  use: {
    loader: 'babel-loader',
    options: {
      exclude: /node_modules/,
      presets: ['@babel/preset-react']
    }
  }
})

rules.push({
  test: /\.(png|jpg|svg|jpeg|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]',
        publicPath: '../.'
      }
    },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};