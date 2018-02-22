# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v0.31.0
------------------------------
*February 22, 2018*

### Changed
- Publishes to npm on tagged commit to master (with regex matching tags like `v0.31.0`)


v0.30.0
------------------------------
*February 22, 2018*

### Added
- Media Element - Image followed by a block of information.


v0.29.0
------------------------------
*February 16, 2018*

### Changed
- Renamed base `scss` file to `fozzie.scss`

v0.28.0
------------------------------
*February 14, 2018*

### Fixed
- Inline svg for breadcrumbs breaking build. Now uses separate svg icon.


v0.27.0
------------------------------
*February 9, 2018*

### Added
- Layout classes - A class for inlining elements side by side and a divider class for vertically separating two elements with a border.


v0.26.0
------------------------------
*February 7, 2018*

### Fixed
- List styling.  Indentation when text wrapped onto second line is now consistent and margin-top on nested lists removed (as not needed).


v0.25.1
------------------------------
*February 6, 2018*

### Fixed
- `.o-btn.is-loading` so the loading image renders correctly in Chrome for Android


v0.25.0
------------------------------
*February 6, 2018*

### Added
- Breadcrumb site navigation component


v0.24.0
------------------------------
*February 1, 2018*

### Added
- Added debug messages for passed in environment variables

### Changed
- Updating `.gitignore` to exclude `yalc` config


v0.23.2
------------------------------
*January 31, 2018*

### Changed
- fozzie-colour-palette version is bumped


v0.23.1
------------------------------
*January 31, 2018*

### Changed
- Fixed o-btnLink's background-color for different statuses


v0.23.0
------------------------------
*January 29, 2018*

### Changed
- Updated `browserlist` in `package.json`
- Updated to use `babel-preset-env`


v0.22.0
------------------------------
*January 17, 2018*

### Added
- Danger added to fozzie to carry out PR checks via travis

### Changed
- Updated `gulp-build-fozzie` to latest version
- Amended SCSS in-line with new Stylelint rules


v0.21.1
------------------------------
*November 13, 2017*

### Added
- Missing default H1-H6 color according to palette.


v0.21.0
------------------------------
*November 13, 2017*

### Added
- `.not-striped` class to the table.
- `.is-loading` class to the o-btn.


v0.20.0
------------------------------
*November 8, 2017*

### Added
- `relativeToParent` parameter to the `font-size` mixin to allow font sizes to use `em` rather than `rem`.


v0.19.0
------------------------------
*November 6, 2017*

### Added
- `c-alert` component is added.
- `alert-variant` mixin is added.


v0.18.4
 ------------------------------
*November 6, 2017*

### Added
- `u-elementFocus--boxShadow` utility class is added.


v0.18.3
------------------------------
*November 3, 2017*

### Added
- `u-pointer` utility class is added.


v0.18.2
------------------------------
*November 1, 2017*

### Added
- `u-uppercase` utility class is added.


v0.18.1
------------------------------
*November 1, 2017*

### Changed
- Changed default font-weight of `o-btn` to `500`


v0.18.0
------------------------------
*October 24, 2017*

### Added
- `truncate` mixin is added.

### Changed
- `fozzie-colour-palette` version bumped to 0.9.0.
- Changed `$btn-default-font-family` to 'Ubuntu'


v0.17.1
------------------------------
*October 24, 2017*

### Changed
- `:focus` state updated to be `2px solid` rather than `3px auto` by default.


v0.17.0
------------------------------
*October 20, 2017*

### Changed
- `:focus` state added (controlled via colour palette variable).


v0.16.0
------------------------------
*October 18, 2017*

### Changed
- Updated dependencies.


v0.15.0
------------------------------
*October 03, 2017*

### Changed
- Updated `btnToggle` styles.

### Removed
- Removed icons SCSS partial — now using SCSS from `f-icons` module.



v0.14.0
------------------------------
*September 26, 2017*

### Changed
- Tidied up gulp setup and config.
- Moved build packages in `devDependencies`.

### Removed
- Removed icons — they now live in the [`f-icons`](https://github.com/justeat/f-icons) module.
- Removed `require-dir` package.
- Removed placeholder JavaScript.


v0.13.0
------------------------------
*August 31, 2017*

### Changed
- Publish only `src/` to npm.
- Specify icons as contained in `src/` rather than `dist/`


v0.12.0
------------------------------
*August 30, 2017*

### Added
- Base button class `o-btn`
- A range of button colour and design modifiers
- Toggle button component
- Base icon class `c-icon`
- Icon size modifiers
- Tick icon classes
- Operator icon classes (plus & minus)
- SVG files for tick and operator icons
- Assets manifest in package.json, specifying the icons to be copied

### Changed
- Updated `gulp-build-fozzie`
- Made the scss path variables overridable


v0.11.1
------------------------------
*August 25, 2017*

### Changed
- Production flag added to lint task


v0.11.0
------------------------------
*August 25, 2017*

### Added
- Lint task to run on travis so we can see any failures before they get published

### Changed
- Couple of small updates in line with the linting errors
- Path for local scripts changed in line with new build config


v0.10.0
------------------------------
*August 25, 2017*

### Added
- Custom bullets on unordered lists.
- `u-bordered` class for adding a border around a block.
- Added narrow view type sizes for headings


### Changed
- Updated line-height for jumbo homepage text.
- Updated the `l-content` class so that it can contain a `header` and `main` that are appropriately spaced for content pages.
- Updated packages


v0.9.0
------------------------------
*August 24, 2017*

### Added
- Table Styling
- `$border-radius` variable added to standardise the radius of rounded components.
- Utility class `u-lightenBg` added so that a lighter background colour can be applied to a page or section of a page.

### Changed
- Better list item spacing.  By default now adds spacing between `li`s (which can be removed by applying the `u-unstyled` class).
- More sensible typographic spacing based on baseline spacing.


v0.8.0
------------------------------
*August 9, 2017*

### Added
- CHANGELOG (changelog inception ✨)

### Changed
- Updated dependencies for `gulp-build-fozzie` and `fozzie-colour-palette`
- `hr` styling updated to use `border` rather than `background` as more native

### Removed
- `@debug` statement in `line-height` function


v0.7.0
------------------------------
*August 4, 2017*

### Added
- `$line-height-base` added to variables

### Changed
- line-height function changed so that it can take strings to access the type map directly by specifying a key


v0.5.1
------------------------------
*July 28, 2017*

### Changed
- Updated dependencies for `gulp-build-fozzie`


v0.5.0
------------------------------
*July 27, 2017*

### Added
- Optional `card` component
- Body copy given a base font-weight
- Default list styling for `ul` and `ol` tags


v0.4.0
------------------------------
*July 18, 2017*

### Added
- Added the `zIndex` mixin for accessing the `zIndex` map

### Changed
- Updated dependencies for `gulp-build-fozzie`
- Utility classes given `!important` as they should never be overridden
- Font-weight variables adjusted in line with the design guidelines
- Indentation made consistent throughout all files

### Removed
- Dependency on Stylelint as now included in the build tasks


v0.3.0
------------------------------
*July 10, 2017*

### Changed
- Updated license and README
- `l-container` width and padding adjusted

### Fixed
- Link to `normalize.css` module fixed


v0.2.3
------------------------------
*June 14, 2017*

### Fixed
- Fixed `font-size` and `rem` mixins


v0.2.2
------------------------------
*June 13, 2017*

### Changed
- Updating docs folder and path to compiled CSS


v0.2.1
------------------------------
*June 13, 2017*

### Changed
- Incremented depencies for `fozzie-colour-palette` and `gulp-build-fozzie`


v0.2.0
------------------------------
*May 15, 2017*

### Added
- Eyeglass support added
- Documentation files added

### Changed
- Package name updated to `@justeat/fozzie` inline with NPM organisation structure


v0.1.1
------------------------------
*May 10, 2017*

### Changed
- Updating dependency to `gulp-build-fozzie`


v0.1.0
------------------------------
*May 9, 2017*

### Added
- Travis config added so that CI checks can be run

### Changed
- `gulp-build-fozzie` integrated to abstract out the build tasks
- Line endings… :ambulance:


v0.0.1
------------------------------
*May 5, 2017*

### Added
- Base structure of module.  Essentially a skeleton version of the module with relevant editorconfigs, gitconfig, license and a very rough outline for the CSS structure
