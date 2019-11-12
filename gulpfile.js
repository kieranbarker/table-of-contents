var gulp = require("gulp"),
    rename = require("gulp-rename"),
    cleanCSS = require("gulp-clean-css"),
    terser = require("gulp-terser");

function minifyCSS() {
  return gulp.src("./css/*.css")
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./css/dist"));
}

function minifyJS() {
  return gulp.src("./js/*.js")
    .pipe(rename({ suffix: ".min" }))
    .pipe(terser())
    .pipe(gulp.dest("./js/dist"));
}

exports.default = gulp.parallel(minifyCSS, minifyJS);