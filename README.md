# Jekyll Editor

The goal of this project is building a desktop app which helps to edit a static website or blog.

- [ ] Launch an empty electron app
- [ ] Add a file explorer widget and open a folder
- [ ] List the folder content
- [ ] Clicking on a file open the content
- [ ] Add text editor (probably monaco) to edit the file
- [ ] Show the markdown preview of the content
- [ ] Show the preview using Jekyll

## Adding Gulp to the project

```shell
$ yarn global add gulp-cli 
```

```shell
$ touch Gulpfile.ts
```

**Useful packages:**

* gulp-sourcemaps
* gulp-newer
* merge2

```typescript
task('build', () => {
  const project = tsc.createProject('tsconfig.json');
  const {js, dts} = project.src()
    .pipe(newer())
    .pipe(sourcemaps.init())
    .pipe(project());
})
```

## Testing electron app

[Spectron](https://github.com/electron/spectron)

## Electron app frontend / backend

webtorrent-desktop: React
src/main
src/rendrer

kup: pug

src/app/renderer
src/app/  js

Mancy: https://github.com/princejwesley/Mancy/tree/master/src
React

N1
https://github.com/nylas/N1/blob/master/src/components/focus-container.jsx
React

