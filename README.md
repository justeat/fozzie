# Fozzie :bear:

[![Join the chat at https://gitter.im/justeat/fozzie](https://badges.gitter.im/justeat/fozzie.svg)](https://gitter.im/justeat/fozzie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/%40justeat%2Ffozzie.svg)](https://badge.fury.io/js/%40justeat%2Ffozzie)
[![Build Status](https://travis-ci.org/justeat/fozzie.svg)](https://travis-ci.org/justeat/fozzie)

Base Front-End Library for Just Eat Global Platform.  Designed to be reusable across any site that want to share those base styles.

## Usage

1. The easiest way to use fozzie modules in your Sass setup is to use [Eyeglass](https://www.npmjs.com/package/eyeglass).

If you are using the [fozzie gulp build tasks](https://www.npmjs.com/package/@justeat/gulp-build-fozzie), then Eyeglass is automatically setup ready to use.  If not, you can use it in one of the following ways:

- [Gulp](https://github.com/sass-eyeglass/eyeglass/blob/master/site-src/docs/integrations/gulp.md)
- [WebPack](https://github.com/sass-eyeglass/eyeglass/issues/153#issuecomment-300895607)

2.  Install the fozzie module using NPM or Yarn:

    ```bash
    yarn add @justeat/fozzie
    ```

3.  Then within your Sass files, you will need to import this module.

    ```scss
    @import 'fozzie';
    ```

You can then use the base styles that `fozzie` has available in this module (and that will be documented shortly).
