import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'dist/bundle.js',
  sourceMap: 'inline',
  plugins: [
    eslint({
      exclude: ['node_modules/**', '*.json']
    }),
    json({}),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};

