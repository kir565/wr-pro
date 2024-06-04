import webpack from 'webpack';
import { IBuildOptions } from './types/build';

export const buildResolve = (
  options: IBuildOptions
): webpack.ResolveOptions => {
  return {
    alias: {},
    extensions: ['.tsx', '.ts', '.js'],
    mainFiles: ['index'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true
  };
};
