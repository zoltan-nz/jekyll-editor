# Jekyll Editor

The goal of this project is building an server/client app for managing jekyll. (Optional: wrap it in an Electron app)

-[ ] Setup a server/client environment
-[ ] Create an input field, read a folder path, pass back to server, server read the folder content, response it to client and client list the folder content for the user.
-[ ] Clicking on a file open the content
-[ ] Add text editor (probably monaco) to edit the file
-[ ] Show the markdown preview of the content
-[ ] Show the preview using Jekyll

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
* gulp-run
* gulp-livereload
* gulp-util

```typescript
task('build', () => {
  const project = tsc.createProject('tsconfig.json');
  const {js, dts} = project.src()
    .pipe(newer())
    .pipe(sourcemaps.init())
    .pipe(project());
})
```

## Build a basic frontend page with React

-[ ] Using Typescript and React
-[ ] Using Gulp for build tool
-[ ] Livereload changes in Electron app

__Notes for React:__

* `render` has to return only one main html element (like `<div>`)
* `Component` has to interfaces, types, a `<Props, Status>`
* Form change callbacks are `Event` types

## Dependencies

Frontend dependencies
- React
- ReactDOM
- Bootstrap style

Frontend dev dependencies
- Typescript
- Gulp

Backend dependencies
- Express

Backend development dependencies
- TypeScrip
- Gulp

## Gulp tasks

### TypeScript (backend, frontend)

* Transpile TypeScript to ES6 JavaScript

### SCSS (frontend)

* Transpile SCSS to CSS

### Clean (backend, frontend)

* Clean up dist folder before a full new build

### Watch (backend, frontend)

* Transpile TypeScript and SCSS
* Trigger Livereload when frontend file changed
* Relaunch node server when backend file changed

### Livereload (frontend)

### Test related tasks
