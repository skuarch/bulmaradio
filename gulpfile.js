const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');
var clean = require('gulp-clean');
const fs = require('fs');

const htmlSrc = './web-client/src/*.html';
const distFolder = './web-client/dist';
const webClientFolder = './web-client';
const files = [
  webClientFolder + '/src/.htaccess',
  webClientFolder + '/src/robots.txt',
  webClientFolder + '/src/favicon.ico',
  webClientFolder + '/src/site.webmanifest',
  webClientFolder + '/src/android-chrome-192x192.png',
  webClientFolder + '/src/android-chrome-512x512.png',
  webClientFolder + '/src/favicon-16x16.png',
  webClientFolder + '/src/favicon-32x32.png',
  webClientFolder + '/src/apple-touch-icon.png',
  webClientFolder + '/src/site.webmanifest',
];

const images = [
  webClientFolder + '/src/img/bulma-type-white.png',
  webClientFolder + '/src/img/640x480.png',
  webClientFolder + '/src/img/android-chrome-192x192.png',
  webClientFolder + '/src/img/android-chrome-512x512.png'
];

const js = [
  webClientFolder + '/src/js/app.js'
];

const css = [
  webClientFolder + '/src/css/bulma.min.css'
];

exports.default = (cb) => {
  exports.minify();
  exports.copy();
  exports.copyImg();
  exports.copyJs();
  exports.copyCss();
  cb();
};

exports.createDist = () => {
  fs.mkdirSync(distFolder);
};

exports.minify = () => {
  return gulp.src(htmlSrc)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(minifyInline())
    .pipe(gulp.dest(distFolder));
};

exports.deleteDist = () => {
  return gulp.src(distFolder, { read: false })
    .pipe(clean());
};

exports.copy = () => {
  return gulp.src(files)
    .pipe(gulp.dest('web-client/dist'));
};

exports.copyImg = () => {
  return gulp.src(images)
    .pipe(gulp.dest('web-client/dist/img'));
};

exports.copyJs = () => {
  return gulp.src(js)
    .pipe(gulp.dest('web-client/dist/js'));
};

exports.copyCss = () => {
  return gulp.src(css)
    .pipe(gulp.dest('web-client/dist/css'));
};

gulp.task('copy', function () {
  exports.copy();
});

gulp.task('copy-img', function () {
  exports.copyImg();
});

gulp.task('copy-js', function () {
  exports.copyJs();
});

gulp.task('copy-css', function () {
  exports.copyCss();
});

gulp.task('minify', () => {
  return exports.minify();
});

gulp.task('deleteDist', () => {
  return exports.deleteDist();
});

