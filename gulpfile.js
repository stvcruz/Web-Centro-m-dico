// Gulp tasks for the San Agustín portal project
const { src, dest, series, watch } = require('gulp');
const sassCompiler = require('sass');
const gulpSass = require('gulp-sass')(sassCompiler);

// compile SCSS to CSS
function scss() {
  return src('css/*.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(dest('css'));
}

// copy files to distribution folder
function build() {
  return src(['*.html', 'css/*.css', 'img/**'], { base: '.' })
    .pipe(dest('distri'));
}

// watch scss files
function watchFiles() {
  watch('css/*.scss', scss);
}

exports.scss = scss;
exports.build = build;
exports.watch = watchFiles;
exports.default = series(scss, build);
