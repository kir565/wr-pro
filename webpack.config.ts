import webpack from 'webpack';
import { buildConfig } from './config/build/buildConfig';
import { IBuildPaths, IEnv } from './config/build/types/build';
import path from 'path';

module.exports = (env: IEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 9000;

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    template: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const config: webpack.Configuration = buildConfig({
    isDev,
    mode,
    port,
    paths
  });

  return config;
};
