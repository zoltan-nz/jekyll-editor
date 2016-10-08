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

```
$ npm i -D rollup
$ npm i -D rollup-plugin-babel
$ npm i -D babel-preset-es2015-rollup
$ npm i -D rollup-plugin-json
$ npm i -D eslint-config-airbnb-base eslint-plugin-import eslint 
```

Add `.babelrc` file in `./src`

```json
{
    "presets": ["es2015-rollup"]
}
```

Add `rollup.config.js`

```
export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'bundle.js'
}
```