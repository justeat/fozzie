const gulp = require('gulp');
const { build } = require('@justeat/gulp-build-fozzie');

// Grab the Fozzie build tasks
build(gulp, {
    js: {
        files: {
            main: {
                srcPath: 'index.js',
                distFile: 'fozzie.js'
            }
        }
    }
});
