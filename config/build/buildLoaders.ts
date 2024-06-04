import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from './types/build';
import webpack from 'webpack';

webpack;

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: [/\.css$/i, /\.module.css$/],
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /.module./,
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]'
          }
        }
      }
    ]
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [tsLoader, cssLoader];
};
