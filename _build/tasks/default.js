const gulp = require('gulp');
const runSequence = require('run-sequence');


gulp.task('default', ['css:lint', 'scripts']);
