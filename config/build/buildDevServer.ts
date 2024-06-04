import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import 'webpack-dev-server';

import { IBuildOptions } from './types/build';

export const buildDevServer = (
  options: IBuildOptions
): DevServerConfiguration => {
  return {
    port: options.port,
    historyApiFallback: true
  };
};
