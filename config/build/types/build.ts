export interface IBuildOptions {
  mode: Mode;
  port: number;
  isDev: boolean;
  paths: IBuildPaths;
}

export interface IBuildPaths {
  entry: string;
  output: string;
  template: string;
  src: string;
}

type Mode = 'development' | 'production';

export interface IEnv {
  mode: Mode;
  port: number;
}
