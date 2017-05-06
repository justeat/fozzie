///////////////////////////////////////////////////////////
// Task Dependencies

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    scss = require('postcss-scss'),
    stylelint = require('stylelint'),
    reporter = require('postcss-reporter'),
    config = require('../config');

///////////////////////////////////////////////////////////


/**
 * css:lint Task
 * -------------
 * Uses our config rules set in .stylelintrc to validate syntax and structure of the CSS
 *
 */
gulp.task('css:lint', function () {

    return gulp.src(`${config.css.srcDir}/**/*.scss`)
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

