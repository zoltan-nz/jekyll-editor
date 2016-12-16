import { dest, task, watch } from 'gulp';
import * as newer from 'gulp-newer';
import * as sourcemaps from 'gulp-sourcemaps';
import { createProject } from 'gulp-typescript';
import * as merge from 'merge2';
import * as path from 'path';

const srcPath = path.join('./src/**');
const distPath = path.join('./dist');

let project = createProject('tsconfig.json');

task('build', () => {
  const {js, dts} = project.src()
    .pipe(newer(srcPath))
    .pipe(sourcemaps.init())
    .pipe(project());
  return merge([
    js.pipe(dest(distPath)),
    dts.pipe(dest(distPath)),
  ]);
});

task('watch', ['build'], () => {
  watch(srcPath, ['build']);
});
