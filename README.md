<div align="center">
<h1>fozzie</h1>

<img width="125" alt="Fozzie Bear" src="bear.png" />

<p>Base Front-End Library for Just Eat Global Platform.  Designed to be reusable across any site that want to share those base styles.</p>
</div>

---

[![npm version](https://badge.fury.io/js/%40justeat%2Ffozzie.svg)](https://badge.fury.io/js/%40justeat%2Ffozzie)
[![Build Status](https://travis-ci.org/justeat/fozzie.svg)](https://travis-ci.org/justeat/fozzie)
[![Coverage Status](https://coveralls.io/repos/github/justeat/fozzie/badge.svg)](https://coveralls.io/github/justeat/fozzie)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/justeat/fozzie.svg)](https://lgtm.com/projects/g/justeat/fozzie/alerts/)

## Caveat

Fozzie now contains new syntax (@use & @forward in favour of @import statements) this now requires you to use dart-sass.

### Reason for change

`@import` will be removed from dart-sass "No later than October 2022", so we needed to move our SCSS libraries and components away from @import to use the new syntax.

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
    @use 'fozzie' as f;

    .c-breadcrumbs {
        @include f.breadcrumbs();
    }
    ```


