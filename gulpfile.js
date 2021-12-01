const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");

gulp.task("copy", () => {
  return gulp.src("./src/assets/**/*").pipe(gulp.dest("./dist/assets"));
});

gulp.task("copy_extra", () => {
  return gulp.src("./src/extra/**/*").pipe(gulp.dest("./dist/extra"));
});

gulp.task("minify_html", () => {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("minify_css", () => {
  return gulp
    .src("./src/assets/css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist/assets/css"));
});

gulp.task(
  "process_all",
  gulp.series("copy", "copy_extra", "minify_html", "minify_css")
);
