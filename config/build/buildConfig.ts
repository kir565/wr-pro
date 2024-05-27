import webpack from 'webpack';

import { IBuildOptions } from './types/build';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildREsolve';
import { buildDevServer } from './buildDevServer';

export const buildConfig = (options: IBuildOptions): webpack.Configuration => {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    devtool: options.isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolve(options),
    output: {
      filename: '[name].[contenthash:8].js',
      path: options.paths.output,
      clean: true,
    },
    devServer: buildDevServer(options),
    plugins: buildPlugins(options),
  };
};
