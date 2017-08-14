/// <binding ProjectOpened='watch' />
/// <vs SolutionOpened='default' />
/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file.

  So we can share common gulp tasks across projects these are
  pulled in as an NPM module:
  'gulp-build-fozzie'
  => https://github.com/justeat/gulp-build-fozzie

  Any tasks created in that module get automatically required below.

  To add a new task, update gulp-build-fozzie, create a PR, and
  push a new release.
*/

const gulp = require('gulp');
var requireDir = require('require-dir');
const { build, config } = require('@justeat/gulp-build-fozzie');

const moduleConfig = require('./_build/config');

// Grab the Fozzie build tasks
build(gulp, moduleConfig);

// Require all tasks in gulp/tasks, including subfolders
// Use if you want to include any local build tasks
// requireDir('./_build/tasks', { recurse: true });
