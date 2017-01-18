var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync   = require('browser-sync').create();
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var postcss = require('gulp-postcss');
var lost = require('lost');
var streamqueue = require('streamqueue');
var concat = require('gulp-concat');



var input_sass = '_app/sass/**/*.scss';
var input_rouge = '_app/murphy.css';
var output_sass = '_site/';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('build:jekyll:local', function() {
  return run('bundle exec jekyll build --config _config.yml').exec();
});



gulp.task('sass', function () {
  return streamqueue({ objectMode: true },
    gulp.src(input_sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write()),
    gulp.src(input_rouge))
    .pipe(concat('main.css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(output_sass))
});


gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});


gulp.task('serve', [ 'build:jekyll:local', 'sass'], function() {

    browserSync.init({
        server: "_site"
    });
    gulp.watch("_app/sass/**/*.scss", ['sass']);
    gulp.watch(['_config.yml'], ['build:jekyll:watch']);
    gulp.watch(['**/*.html', '!_site/**/*.*'], ['build:jekyll:watch']);
    gulp.watch('./**/*.+(md|markdown|MD)', ['build:jekyll:watch']);
    });




gulp.task('default', ['serve'  /*, possible other tasks... */]);
