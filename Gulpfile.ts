import { dest, src, task, watch } from 'gulp';
import * as newer from 'gulp-newer';
import * as sourcemaps from 'gulp-sourcemaps';
import { createProject } from 'gulp-typescript';
import * as merge from 'merge2';
import * as path from 'path';
import * as rimraf from 'rimraf';

const SRC_PATH = path.join('./src/**');
const DIST_PATH = path.join('./dist');
const STATIC_FILES = path.join('./src/', 'index.html');


task('default', ['clean', 'static', 'typescript']);

task('clean', () => {
  rimraf.sync(DIST_PATH);
});

task('typescript', () => {
  let project = createProject('tsconfig.json');

  const {js, dts} = project.src()
    .pipe(newer(SRC_PATH))
    .pipe(sourcemaps.init())
    .pipe(project());
  return merge([
    js.pipe(dest(DIST_PATH)),
    dts.pipe(dest(DIST_PATH)),
  ]);
});

task('static', () => {
  return src(STATIC_FILES)
    .pipe(dest(DIST_PATH));
});

task('watch', ['clean', 'static', 'typescript'], () => {
  watch(SRC_PATH, ['static', 'typescript']);
});

task('copy', () => {
  src('');
});
