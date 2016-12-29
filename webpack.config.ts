import { join } from 'path';
import * as merge from 'webpack-merge';

const backend = {
  target: 'async-node',
  entry: {
    backend: './src/backend/index.ts',
  },
};

const frontend = {
  target: 'web',
  entry: {
    frontend: './src/frontend/app.tsx',
  },

};

const common = {
  devtool: 'source-map',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader',
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: './dist/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

export default merge(common, frontend, backend);
