const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const clean = require('gulp-clean');

function compileSass() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function minifyCss() {
    return src('dist/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/css'));
}

function cleanDist() {
    return src('dist', { allowEmpty: true })
        .pipe(clean());
}

exports.compileSass = compileSass;
exports.minifyCss = minifyCss;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, compileSass, minifyCss);
