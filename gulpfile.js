const gulp         = require('gulp');

const minifyCss    = require('gulp-minify-css');
const uglifyJs     = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const rename       = require('gulp-rename');

const browserSync  = require('browser-sync');
const reload       = browserSync.reload;

const paths = {
    css : ['src/styles/**/*.css'],
    js  : ['src/scripts/modules/*.js'],
};

gulp.task('autoReload', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });

    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('minCss', function() {
    return gulp.src(paths.css)
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/dist/styles.min'))
        .pipe(reload({stream: true}))
});

gulp.task('minJs', function() {
    return gulp.src(paths.js)
        .pipe(uglifyJs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/dist/scripts'))
        .pipe(reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch(paths.css, gulp.series('minCss'));
    gulp.watch(paths.js, gulp.series('minJs'));
});

gulp.task('default', gulp.parallel('watch', 'autoReload'));
