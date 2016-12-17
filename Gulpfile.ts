import { dest, task, watch } from 'gulp';
import * as newer from 'gulp-newer';
import * as sourcemaps from 'gulp-sourcemaps';
import { createProject } from 'gulp-typescript';
import * as merge from 'merge2';
import * as path from 'path';

const SRC_PATH = path.join('./src/**');
const DIST_PATH = path.join('./dist');

let project = createProject('tsconfig.json');

task('build', () => {
  const {js, dts} = project.src()
    .pipe(newer(SRC_PATH))
    .pipe(sourcemaps.init())
    .pipe(project());
  return merge([
    js.pipe(dest(DIST_PATH)),
    dts.pipe(dest(DIST_PATH)),
  ]);
});

task('watch', ['build'], () => {
  watch(SRC_PATH, ['build']);
});
