const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const del = require('del');

// 输出目录
const outputDir = '../../amp-ui-demo/src/components/';
const pluginsDir = '../demo/plugins';

gulp.task('compile-css', () => {
  return gulp
    .src(['../lib/**/*.less', '!../lib/**/_*.less'])
    .pipe(less())
    .pipe(
      rename((path) => {
        path.extname = '.wxss';
      }),
    )
    .pipe(gulp.dest(outputDir));
});

gulp.task('compile-images', () => {
  return gulp.src('../lib/**/*.?(png|jpg|gif|jpeg|webp|svg)').pipe(gulp.dest(outputDir));
});

gulp.task('compile-js', () => {
  return gulp.src(['../lib/**/*.js', '!../lib/Echarts/*.js']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-json', () => {
  return gulp.src(['../lib/**/*.json']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-wxs', () => {
  return gulp.src(['../lib/**/*.wxs']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-wxml', () => {
  return gulp.src(['../lib/**/*.wxml']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-clean', async () => {
  return del.sync(outputDir, { force: true });
});

gulp.task('auto', () => {
  gulp.watch('../lib/**/*.less', gulp.series('compile-css'));
  gulp.watch('../lib/**/*.?(png|jpg|gif|jpeg|webp|svg)', gulp.series('compile-images'));
  gulp.watch('../lib/**/*.js', gulp.series('compile-js'));
  gulp.watch('../lib/**/*.json', gulp.series('compile-json'));
  gulp.watch('../lib/**/*.wxml', gulp.series('compile-wxml'));
  gulp.watch('../lib/**/*.wxs', gulp.series('compile-wxs'));
});

gulp.task(
  'default',
  gulp.series(
    'compile-clean',
    gulp.parallel(
      'compile-css',
      'compile-images',
      'compile-js',
      'compile-json',
      'compile-wxml',
      'compile-wxs',
      'auto',
    ),
  ),
);
