const gulp = require('gulp');
const cssmin = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const del = require('del');

// 输出目录
const outputDir = '../dist/';
// 以下文件打包不做处理, 按源文件输出
const ignoreFiles = ['echarts.js'];

/**
 * 文件是否压缩
 * @param {File} f
 */
const condition = (f) => {
  let flag = true;
  ignoreFiles.forEach((item) => {
    if (f.path.indexOf(item) > -1) {
      flag = false;
    }
  });
  return flag;
};

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
      gulpif(
        condition,
        babel({
          presets: ['@babel/env'],
        }),
      ),
    )
    .pipe(gulpif(condition, uglify()))
    .pipe(gulp.dest(outputDir));
});

gulp.task('compile-json', () => {
  return gulp.src(['../lib/**/*.json']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-wxml', () => {
  return gulp.src(['../lib/**/*.wxml']).pipe(gulp.dest(outputDir));
});

gulp.task('compile-clean', async () => {
  return del.sync(outputDir, { force: true });
});

gulp.task(
  'default',
  gulp.series(
    'compile-clean',
    gulp.parallel('compile-css', 'compile-images', 'compile-js', 'compile-json', 'compile-wxml'),
  ),
);
