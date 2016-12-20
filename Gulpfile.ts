import { dest, src, task, watch } from 'gulp';
import * as newer from 'gulp-newer';
import * as sourcemaps from 'gulp-sourcemaps';
import { createProject } from 'gulp-typescript';
import * as merge from 'merge2';
import * as path from 'path';
import * as rimraf from 'rimraf';


const PATH = {
  SRC: path.join('./src/**'),
  DIST: path.join('./dist'),
  STATIC: path.join('./src/', 'index.html'),
};

task('default', ['clean', 'static', 'typescript']);

task('clean', () => {
  rimraf.sync(PATH.DIST);
});

task('typescript', () => {
  let project = createProject('tsconfig.json');

  const {js, dts} = project.src()
    .pipe(newer(PATH.SRC))
    .pipe(sourcemaps.init())
    .pipe(project());
  return merge([
    js.pipe(dest(PATH.DIST)),
    dts.pipe(dest(PATH.DIST)),
  ]);
});

task('static', () => {
  return src(PATH.STATIC)
    .pipe(dest(PATH.DIST));
});

task('watch', ['clean', 'static', 'typescript'], () => {
  watch(PATH.SRC, ['static', 'typescript']);
});

task('electron', () => {
  run('electron .').exec();
});
