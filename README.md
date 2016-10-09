# Experiment

## Log

Node project initialization
```shell
$ npm init
```

Tools:
* Rollup, http://rollupjs.org/guide/
* Babel
* Eslint

### Setting up Rollup with Babel

```shell
$ npm i -D rollup
$ npm i -D rollup-plugin-babel
$ npm i -D rollup-plugin-json
$ npm i -D rollup-plugin-eslint
$ npm i -D babel-preset-es2015-rollup
$ npm i -D babel-preset-es2015
```

Add `rollup.config.js` to your root folder.

```js
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
```

Add `.babelrc` file in `./src`

```json
{
  "presets": ["es2015-rollup"]
}
```

### ESlint setup

```
$ npm i -D eslint
$ npm install
$ eslint --init 
```

### Formatting settings

* editorconfig
* jsbeautifyer

```
\\.editorconfig
root = true

[*]
indent_style = space
indent_size = 2
```