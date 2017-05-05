const gulp = require('gulp');
const cache = require('gulp-cached');
const plumber = require('gulp-plumber');
const gulpif = require('gulp-if');
const size = require('gulp-size');
const runSequence = require('run-sequence');
const exorcist = require('exorcist');
const config = require('../config');
const eslint = require('gulp-eslint');

// jest packages
const jest = require('jest-cli');
const path = require('path');

// bundle packages
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const rev = require('gulp-rev');


/**
 *  `scripts` Task
 *  ------------
 *
 */
gulp.task('scripts', callback => {
    runSequence(
        'scripts:lint',
        'scripts:test',
        'scripts:bundle',
        callback);
});


/**
 * `scripts:lint` Task
 * -------------
 * Uses config rules to test for valid JS.
 *
 */
gulp.task('scripts:lint', () => gulp.src(`${config.js.srcDir}/**`)
    .pipe(cache('scripts-lint'))
    .pipe(plumber(config.gulp.onError)) // stops watch from breaking if an error occurs
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);


/**
 * `scripts:test` Task
 * -------------
 * Runs the JS unit tests.
 *
 */
gulp.task('scripts:test', callback => {
    jest.runCLI(
        {},
        path.resolve(process.cwd()),
        () => callback()
    );
});


/**
 * `scripts:bundle` Task
 * -------------
 * Bundle the JS modules together into a single file and and transpile es2015 features to es5
 *
 */
gulp.task('scripts:bundle', ['clean:scripts'], () => {

    return browserify(config.js.srcDir + config.js.srcFile, {
            debug: config.isDev,
            transform: 'babelify'
        })
        .bundle()

        // handle errors
        .on('error', config.gulp.onError)

        // move the source map outisde of the JS file when not in prod
        .pipe(gulpif(config.isDev,
            exorcist(`${config.js.distDir}/${config.js.distFile}.map`)
        ))

        // create unminified file
        .pipe(source(config.js.distFile))
        .pipe(buffer())
        .pipe(gulp.dest(config.js.distDir))

        // output the size of the unminified JS
        .pipe(gulpif(config.misc.showFileSize,
            size({
                title: 'Bundled JS Report – unminified build –',
                showFiles: config.misc.showFiles
            })
        ))

        // capture sourcemaps from transforms
        .pipe(gulpif(config.isDev,
            sourcemaps.init({ loadMaps: true })
        ))

        // minify the bundle
        .pipe(uglify({ output: { quote_keys: true /* keeps IE support for quoted object literals */ } }))
        .pipe(rev()) // revision control for caching
        .pipe(rename({ suffix: '.min' }))

        // output the size of the minified JS
        .pipe(gulpif(config.misc.showFileSize,
            size({
                title: 'Bundled JS Report – minified build –',
                showFiles: config.misc.showFiles
            })
        ))

        // write the sourcemap to a separate file
        .pipe(gulpif(config.isDev,
            sourcemaps.write('.')
        ))

        .pipe(gulp.dest(config.js.distDir));

});
