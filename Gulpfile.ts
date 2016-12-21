import { dest, src, task, watch } from 'gulp';
import * as newer from 'gulp-newer';
import * as sourcemaps from 'gulp-sourcemaps';
import { createProject } from 'gulp-typescript';
import * as merge from 'merge2';
import * as path from 'path';
import * as rimraf from 'rimraf';

const PATH_COMMON = {
  DIST: './dist',
  SRC: './src',
};

const PATH_FRONTEND_BASE = 'frontend';
const PATH_FRONTEND = {
  DIST: path.join(PATH_COMMON.DIST, PATH_FRONTEND_BASE),
  SRC: path.join(PATH_COMMON.SRC, PATH_FRONTEND_BASE),
};
const PATH_BACKEND_BASE = 'backend';
const PATH_BACKEND = {
  DIST: path.join(PATH_COMMON.DIST, PATH_BACKEND_BASE),
  SRC: path.join(PATH_COMMON.SRC, PATH_BACKEND_BASE),
};

task('default', ['clean', 'typescript']);

task('clean', () => {
  rimraf.sync(PATH_COMMON.DIST);
});

task('typescript', () => {
  let project = createProject('tsconfig.json');

  const {js, dts} = project.src()
    .pipe(newer(`${PATH_COMMON.SRC}/**/*`))
    .pipe(sourcemaps.init())
    .pipe(project());
  return merge([
    js.pipe(dest(PATH_COMMON.DIST)),
    dts.pipe(dest(PATH_COMMON.DIST)),
  ]);
});

task('watch', ['clean', 'typescript'], () => {
  watch(`${PATH_COMMON.SRC}/**`, ['typescript']);
});
