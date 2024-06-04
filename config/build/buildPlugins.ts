import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/build';

export const buildPlugins = (
  options: IBuildOptions
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.template
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  ];
};
