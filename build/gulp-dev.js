const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

const outputDir = '../demo/components/';

gulp.task('compile-css', () => {
  return gulp
    .src(['../lib/**/*.less', '!../lib/**/_*.less'])
    .pipe(less())
    .pipe(cssmin())
    .pipe(
      rename((path) => {
        path.extname = '.wxss';
      }),
    )
    .pipe(gulp.dest(outputDir));
});

gulp.task('compile-images', () => {
  return gulp
    .src('../lib/**/*.?(png|jpg|gif|jpeg|webp|svg)')
    .pipe(
      imagemin({
        progressive: true, // 无损压缩JPG图片
        svgoPlugins: [{ removeViewBox: false }], // 不移除svg的viewbox属性
      }),
    )
    .pipe(gulp.dest(outputDir));
});

gulp.task('compile-js', () => {
  return gulp
    .src(['../lib/**/*.js'])
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest(outputDir));
});

gulp.task('compile-json', () => {
  return gulp.src(['../lib/**/*.json']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-wxml', () => {
  return gulp.src(['../lib/**/*.wxml']).pipe(gulp.dest(outputDir));
});

gulp.task('auto', () => {
  gulp.watch('../lib/**/*.less', gulp.series('compile-css'));
  gulp.watch('../lib/**/*.js', gulp.series('compile-js'));
  gulp.watch('../lib/**/*.json', gulp.series('compile-json'));
  gulp.watch('../lib/**/*.wxml', gulp.series('compile-wxml'));
});

gulp.task(
  'default',
  gulp.parallel(
    'compile-css',
    'compile-images',
    'compile-js',
    'compile-json',
    'compile-wxml',
    'auto',
  ),
);
