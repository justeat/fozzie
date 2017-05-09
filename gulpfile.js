/// <binding ProjectOpened='watch' />
/// <vs SolutionOpened='default' />
/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in _build/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  _build/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require('require-dir');
const build = require('@justeat/gulp-build-fozzie');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./_build/tasks', { recurse: true });

build({
  js: {
    srcFile: 'fozzie.js'
  },
  docs: {
    cssUrl: 'https://d2vkuayfhnkplp.cloudfront.net/assets/dist/css/je-18a9a16e08.min.css',
    jsUrl: 'https://d2vkuayfhnkplp.cloudfront.net/assets/dist/js/script-42aee39277.min.js'
  }
});
