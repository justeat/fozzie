const gulp = require('gulp');
const del = require('del');
const config = require('../config');


/**
 * `clean:scripts` Task
 * -------------
 * Removes all files form the JS dist directory
 *
 */
gulp.task('clean:scripts', () => del(config.js.distDir + '/**/*'));
