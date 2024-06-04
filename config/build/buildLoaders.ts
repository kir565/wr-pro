import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { IBuildOptions } from './types/build';
import webpack from 'webpack';

webpack;

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const cssLoader = {
    test: [/\.(sc|sa|c)ss$/i, /\.module.css$/],
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
      },
      'sass-loader'
    ]
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]]
      }
    }
  };

  return [babelLoader, tsLoader, cssLoader];
};
