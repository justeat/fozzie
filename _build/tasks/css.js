///////////////////////////////////////////////////////////
// Task Dependencies

var gulp          = require('gulp'),
    config        = require('../config'),
    plumber       = require('gulp-plumber'),
    gulpif        = require('gulp-if'),
    rename        = require('gulp-rename'),
    filesizegzip  = require('filesizegzip'),
    tap           = require('gulp-tap'),

    sass          = require('gulp-sass'),
    eyeglass      = require('eyeglass'),
    cssnano       = require('cssnano'),
    sourcemaps    = require('gulp-sourcemaps'),
    postcss       = require('gulp-postcss'),
    scss          = require('postcss-scss'),
    assets        = require('postcss-assets'),
    stylelint     = require('stylelint'),
    reporter      = require('postcss-reporter'),
    autoprefixer  = require('autoprefixer'),
    rev           = require('gulp-rev');

///////////////////////////////////////////////////////////


/**
 * css:lint Task
 * -------------
 * Uses our config rules set in .stylelintrc to validate syntax and structure of the CSS
 *
 */
gulp.task('css:lint', function () {

    return gulp.src([ `${config.css.srcDir}/**/*.scss` ])
        .pipe(
            postcss([
                stylelint(),
                reporter({
                    clearMessages: true,
                    throwError: true
                })
            ],
            { syntax: scss })
        );

});

