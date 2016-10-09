# Experiment

## Log

Node project initialization

```
$ npm init
```

Tools:

* Rollup, http://rollupjs.org/guide/
* Babel
* Eslint
* Eslint Airbnb config



## Setting up Rollup with Babel

```
$ npm i -D rollup
$ npm i -D rollup-plugin-babel
$ npm i -D babel-preset-es2015-rollup
$ npm i -D babel-preset-es2015
```

Add `rollup.config.js` to your root folder.

```
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'dist/index.js',
  sourceMap: 'inline',
  moduleName: 'hello',
  plugins: [
    json({}),
    babel({
      exclude: 'node_modules/**',
    }),
    eslint({
      exclude: ['node_modules/**']
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

```
$ npm i -D rollup-plugin-json
```



Add `rollup.config.js`

```
export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'bundle.js'
}
```



## ESlint setup

```
$ npm i -D eslint
$ npm install
$ eslint --init 
```

## Formatting settings

```
\\.editorconfig
root = true

[*]
indent_style = space
indent_size = 2
```

```

```