const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');
const gulpCopy = require('gulp-copy');
var clean = require('gulp-clean');
const fs = require('fs');

const htmlSrc = './web-client/src/*.html';
const distFolder = './web-client/dist';
const webClientFolder = './web-client';
const files = [
  webClientFolder + '/src/.htaccess',
  webClientFolder + '/src/robots.txt',
  webClientFolder + '/src/favicon.ico',
  webClientFolder + '/src/site.webmanifest'    
];

const images = [
  webClientFolder + '/src/img/bulma-type-white.png'
];

const js = [
  webClientFolder + '/src/js/app.js'
];

exports.default = (cb) => {
  exports.minify();
  exports.copy();
  exports.copyImg();
  exports.copyJs();
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

gulp.task('copy', function () {
  exports.copy();
});

gulp.task('copy-img', function () {
  exports.copyImg();
});

gulp.task('copy-js', function () {
  exports.copyJs();
});

gulp.task('minify', () => {
  return exports.minify();
});

gulp.task('deleteDist', () => {
  return exports.deleteDist();
});

