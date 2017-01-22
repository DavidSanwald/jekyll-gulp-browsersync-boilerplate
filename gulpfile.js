// *************************************
//
//   Gulpfile
//
// *************************************
//
// Main tasks:
//   `gulp` ->  compile Sass, build Jekyll, start BrowserSync
//   `gulp build`
//   `gulp compile:sass`
//
//
// *************************************



/**
 * gulp-load-plugins loads automatically all plugins
 * in our package.json file, which begin with "gulp"
 * in an object we can choose.
 */
 
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

// external paths for modularity
var paths = require('./_gulp/paths');


/**
 * defining obtions, maybe going to separate them into
 * a new file for improved modularity and a more reusable,
 * generic gulpfile
 */

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};



// *************************************
//
//   Tasks
//
// *************************************


gulp.task('build:jekyll:watch', ['build:jekyll:local'], function(callback) {
    browserSync.reload();
    callback();
});

gulp.task('build:jekyll:local', function() {
    return plugins.run('bundle exec jekyll build --config _config.yml').exec();
});

gulp.task('compile:sass', function() {
    return gulp.src(paths.appSassFilesGlob).pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass(sassOptions).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer(autoprefixerOptions))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.siteDir))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('serve:jekyll', [
    'build:jekyll:local', 'compile:sass'
], function() {

    browserSync.init({server: "_site"});


    gulp.watch("_app/sass/**/*.scss", ['compile:sass']);
    gulp.watch(['_config.yml'], ['build:jekyll:watch']);
    gulp.watch([
        '**/*.html', '!_site/**/*.*'
    ], ['build:jekyll:watch']);
    gulp.watch('./**/*.+(md|markdown|MD)', ['build:jekyll:watch']);
});




gulp.task('default', ['serve:jekyll'
    ]);
