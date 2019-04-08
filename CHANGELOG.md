# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html)


v1.41.0
------------------------------
*April 8, 2019*

### Added
- Added `c-listingSkeleton` component, a `c-listing` loading skeleton.


v1.40.0
------------------------------
*April 3, 2019*

### Changed
- Updated npm dependencies.

### Fixed
- Modal styles which caused the modal to be hidden on large screens.


v1.39.0
------------------------------
*March 21, 2019*

### Changed
- `c-order-card` style amendments.
- `c-cuisinesWidget` underline text on hover state.


v1.38.0
------------------------------
*March 20, 2019*

### Changed
- Alignment and image size of app component.


v1.37.0
------------------------------
*March 20, 2019*

### Fixed
- Styling for `c-cookieWarning-inner` to prevent text flowing under the close button.


v1.36.0
------------------------------
*March 12, 2019*

### Added
- Modal optional component.
- Expandable menu modifier.
- Overlay & prevent scroll utility helpers.

### Fixed
- Menu component `has-icon` class only applied to small device widths.


v1.35.0
------------------------------
*March 6, 2019*

### Changed
- Styles for `c-orderCard--inactive`

### Added
- `u-absolutelyCentered` styles


v1.34.0
------------------------------
*March 5, 2019*

### Changed
- Small styles amends to `c-cuisinesGrid--gridOfThree`


v1.33.0
------------------------------
*February 20, 2019*

### Changed
- Add more media breakpoints to `c-pageBanner--tall`


v1.32.0
------------------------------
*February 14, 2019*

### Changed
- `l-container` media queries breakpoints
- `c-pageBanner` small styles amends


v1.31.0
------------------------------
*February 12, 2019*

### Changed
- Change class names from `c-cuisinesWidget-grid` and `c-cuisinesWidget-grid--gridOfThree` to `c-cuisinesGrid` and `c-cuisinesGrid--gridOfThree`


v1.30.1
------------------------------
*February 11, 2019*

### Fixed
- Update the cursor type for the cookie banner close button


v1.30.0
------------------------------
*February 11, 2019*

### Changed
- Rewrite `c-cuisinesWidget` to use css grid instead of flex

Now the component has grid modifier class `c-cuisinesWidget-grid--gridOfThree` instead of widget modifier class `c-cuisinesWidget--gridOfThree`


v1.29.1
------------------------------
*February 6, 2019*

### Fixed
- Centre align child elements in `c-overflowCarousel` component
- Adjust spacing around the `c-overflowCarousel` component


v1.29.0
------------------------------
*February 6, 2019*

### Changed
- Fix some styles for `c-orderCard` and `c-overflowCarousel` components

### Added
- `.o-link` classes


v1.28.0
------------------------------
*January 31, 2019*

### Added
- more cookie warning tweaks


v1.27.0
------------------------------
*January 31, 2019*

### Added
- cookie warning text style tweaks


v1.26.0
------------------------------
*January 29, 2019*

### Added
- cookie warning styles


v1.25.0
------------------------------
*January 29, 2019*

### Changed
- Updated card component styles.
- Updated page banner component styles.


v1.24.1
------------------------------
*January 24, 2019*

### Fixed
- Adjusted dates in changelog.
- Removed height on `c-contentTitle-icon` to fix icon alignment.

### Added
- `white-space: initial` to `.c-listing-item-detailsRow-text` to adjust line wrapping.


v1.24.0
------------------------------
*January 15, 2019*

### Added
- `l-innerContainer--verticalSpacing` for base spacing between sections.


v1.23.0
------------------------------
*January 11, 2019*

### Changed
- Adjusted collapsible card padding and heights for different device widths.


v1.22.0
------------------------------
*January 10, 2019*

### Added
- LGTM badge on readme.

### Changed
- Updated readme layout.

### Fixed
- Hide first of type paragraph in a collapsed card section.


v1.21.0
------------------------------
*January 9, 2019*

### Changed
- Hide all but the paragraph element in a collapsed card section.


v1.20.0
------------------------------
*December 17, 2018*

### Changed
- Updated button vert padding


v1.19.0
------------------------------
*December 13, 2018*

### Added
- Styles for `c-orderCard`.


v1.18.0
------------------------------
*December 4, 2018*

### Added
- Styles for `c-appsBanner`.


v1.17.0
------------------------------
*December 4, 2018*

### Added
- Styles for `c-cuisinesWidget`.
- Babel resolution set to fix Travis build
- Minor package updates

### Removed
- Babel 7 dependencies removed from package.json (as now installed as part of gulp-build-fozzie).


v1.16.0
------------------------------
*November 19, 2018*

### Changed
- Expand styles for `c-pageBanner`.


v1.15.0
------------------------------
*November 19, 2018*

### Added
- Added `c-breadcrumbs--compact` rule.

### Fixed
- Fixed breadcrumbs font size and line height.


v1.14.1
------------------------------
*November 19, 2018*

### Change
- Change switch to object literal in `isWithinBreakpoint` for better performance and readability.


v1.14.0
------------------------------
*November 16, 2018*

### Fixed
- Fixed star rating SVG rendering on IE11 by setting the background size to the set size of the SVG.


v1.13.0
------------------------------
*November 14, 2018*

### Change
- Change `o-formToggle` animation timing to be quicker on `<mid`.


v1.12.0
------------------------------
*November 9, 2018*

### Changed
- Moved menulog fonts into their own sub-folder.


v1.11.0
------------------------------
*November 6, 2018*

### Added
- Added `display: none` to `has-noItems` within the listing component.


v1.10.0
------------------------------
*November 5, 2018*

### Added
- Added `.c-breadcrumb--transparent` class to use breadcrumbs with the transparent header.


v1.9.0
------------------------------
*October 30, 2018*

### Fixed
- Fixed small star rating widths on devices with pixel density ratio of +3.


v1.9.0
------------------------------
*November 2, 2018*

### Fixed
- Fixed small star rating widths on devices with pixel density ratio of +3.


v1.8.0
------------------------------
*October 29, 2018*

### Added
- Improved a11y focus states on `.o-formToggle`.

### Changed
- Updated `.o-formToggle` checked state to reflect new design.

### Fixed
- Fixed icon showing on hover.
- Fixed border updating when checked (missing content in pseudo).


v1.7.0
------------------------------
*October 22, 2018*

### Added
- Added `belowHighest` to zIndex map.


v1.6.0
------------------------------
*October 9, 2018*

### Fixed
- Added `overflow-y: hidden` to overflow carousel to stop X and Y scrolling.


v1.5.0
------------------------------
*October 8, 2018*

### Added
- Menulog custom Header typeface `Aspira Heavy` added and included to assets copied to project when module is installed and run (via `f-copy-assets`).
- `@font-face` rules for Asipra Heavy in Menulog theme


v1.4.0
------------------------------
*October 5, 2018*

### Added
- Optional `c-toast` component.

### Changed
- `c-menu` active styles applied to link rather than list-item.
- `c-pagebanner` styles updated.
- `zIndex` map value for `low` changed.
- Sticky utility classes updated.

### Fixed
- Border radius reset on the `c-card--outline--aboveMid` class.


v1.3.0
------------------------------
*October 5, 2018*

- Added `isWithinBreakpoint` method to breakpoint helper for breakpoint queries that match our SCSS style
- Added associated unit tests for `isWithinBreakpoint` method


v1.2.0
------------------------------
*October 3, 2018*

### Fixed
- Fixed spacing on `c-listing` component
- Fixed display on `c-overflowCarousel` component


v1.1.0
------------------------------
*October 3, 2018*

### Fixed
- Issue with `!default` causing spacing and breakpoint maps to not be set correctly (as already set previously, so not overriding properly).
- CHANGELOG typo fix
- Adding `resolutions` entry for `espree` to resolve errors when running `scripts:lint`

### Changed
- Moved optionally included components (via mixin) into `/optional` subfolder within `/components` directory
- Minor package updates


v1.0.0
------------------------------
*October 2, 2018*

### Added
- `$theme` variable (via `_theme.scss` file) added to allow for theme overrides (such as for Menulog)
- Ability to switch to Menulog theme by setting `$theme: 'ml'`.

### Changed
- **Breaking change**: Using new `@justeat/f-utils` package for utility functions/mixins instead of `kickoff/utils.scss`.
- **Breaking change**: Moved and renamed text utility classes.
  - `text-center` -> `u-text-center`
  - `text-centre` -> `u-text-centre`
  - `text-left` -> `u-text-left`
  - `text-right` -> `u-text-right`
  - `text-highlight` -> `u-text-highlight`
  - `text-indent` -> `u-text-indent`
- **Breaking change**: The following components have now been made optional, and are included by referencing the appropriate mixin: `badge`, `contentHeader`, `contentTitle`, `fullScreenPopOver`, `listing`, `overflowCarousel`, `pageBanner`, `rating`.
- Updated variable names across component files to be a bit more consistent with one another.
- Updated comments across SCSS files for better consistency.

### Removed
- **Breaking change**: Mixins, Functions and helpers (such as breakpoints and code-highlighting) all moved to `@justeat/f-utils` module.
- **Breaking change**: A number of button types have been removed that aren't needed as yet in global.  These include `o-btnToggle`, `o-btn--progress`, `o-btn--roundedIcon`, `o-btn--rounded`, `o-btn--transparent`, `o-btn--small` and `o-btn-group`.


v0.102.0
------------------------------
*September 27, 2018*

### Changed
- Media element negative image position.
- Top menu spacing.
- Page banner positions.

### Fixed
- Badge separator display fix.


v0.101.0
------------------------------
*September 26, 2018*

### Changed
- Changed `c-badge--transparent` and `c-badge--light` divider to be a pseudo element to improve accessibility

### Added
- Added glyphs file within settings to house CSS glyoh variables

v0.100.1
------------------------------
*September 26, 2018*

### Changed
- preload font-weight to 400 to stop large visible jump in weight once webfonts have loaded
- set headings to use headings font-weight


v0.100.0
------------------------------
*September 26, 2018*

### Added
- Stop FOIT JS module to reduce meaningful paint with webfonts

### Changed
- formToggle count text size


v0.99.2
------------------------------
*September 25, 2018*

### Fixed
- Addition of modifier on `c-fullScreenPopOver` to stop non tabable functionality affecting other devices >mid


v0.99.1
------------------------------
*September 25, 2018*

### Fixed
- Content header link mobile display property


v0.99.0
------------------------------
*September 21, 2018*

### Changed
- Changed target of listing component is-premier image.
- Removed redundant font weight from listing title.

### Added
- Added styles to `display: none` popover component content when not visible for accessible tabbing.


v0.98.0
------------------------------
*September 19, 2018*

### Changed
- Changed pop over action button text decoration from underlined to underlined on hover.


v0.97.1
------------------------------
*September 18, 2018*

### Fixed
- Added missing semicolon to color util to fix build.


v0.97.0
------------------------------
*September 18, 2018*

### Added
- Added `.u-color-secondary` class to color utils.


v0.96.0
------------------------------
*September 18, 2018*

### Fixed
- Fixed `.o-formControl-indicator--radio` position on <= mid devices.


v0.95.0
------------------------------
*September 18, 2018*

### Added
- Added `c-listing-item-badge` to the listing component to handle badge responsiveness


v0.94.0
------------------------------
*September 17 2018*

### Changed
- Made responsive breakpoints more consistent on `c-contentHeader`.


v0.93.0
------------------------------
*September 17 2018*

### Added
- Added additional focus states to improves accessibility of formToggles.

### Changed
- Moved the padding from c-listing-item to c-listing-item-link for a nicer focus border look.


v0.92.0
------------------------------
*September 14, 2018*

### Added
- `l-inlined--top` layout helper.
- New card modifiers for spacing, borders, and background colours.
- Utility helper for text truncation.


v0.91.0
------------------------------
*September 13 2018*

### Changed
- Added height to `c-listing-item-premierImage`.


v0.90.0
------------------------------
*September 13 2018*

### Changed
- Removed margin from the span within `c-badge`.


v0.89.0
------------------------------
*September 13 2018*

### Added
- Addition of `c-listing-loader` class to seperate the loading animation from the `c-listing` container.


v0.88.0
------------------------------
*September 12 2018*

### Added
- Addition of `c-badge--transparent`

v0.87.0
------------------------------
*September 12 2018*

### Added
- Card component normalise links modifier.
- Position sticky utility helper.
- Padding utility helpers.

### Changed
- Applied `!important` declaration to spacing utilities to ensure that they always trump other styles.
- Badge component text never wraps.
- Increased spacing between badges.
- Card components display as blocks.
- Card component comments updated.

### Fixed
- Overlap of angled badge section over text.


v0.86.0
------------------------------
*September 12, 2018*

### Added
- Added `cursor: pointer` to the hover of `o-btnLink`.


v0.85.0
------------------------------
*September 11, 2018*

### Changed
- Updated formToggle click area.
- Removed formToggle count pointer events.
- Updated overflowCarousel display to `inline-flex`.


v0.84.0
------------------------------
*September 11, 2018*

### Added
- Added new class for alert status on listings.

### Changed
- Removed unused variable names within listings.


v0.83.0
------------------------------
*September 11, 2018*

### Added
- Added text colour utility classes.


v0.82.0
------------------------------
*September 11, 2018*

### Added
- Added `--extraSmall` modifier to ratings.

### Changed
- Updated listing rating styles to work with new rating size.


v0.81.0
------------------------------
*September 10, 2018*

### Changed
- Updated listing state styles.
- Updated listing state class names
- Updated listing first and last childred to have border radius


v0.80.0
------------------------------
*September 10, 2018*

### Added
- Card no padding modifier.
- Card highlight modifier.
- Card bottom section modifier.
- Animation to card section chevron.
- 0.5 spacing value.

### Changed
- Updated modules to use new 0.5 spacing value.

### Fixed
- Card section margin only applied on larger screens.


v0.79.0
------------------------------
*September 7, 2018*

### Added
- No padding collapsible card section styles.

### Changed
- Updated menu styles.


v0.78.0
------------------------------
*September 7, 2018*

### Added
- Card component section child styles.

### Changed
- Updated breakpoints for menu and page banner components.


v0.77.0
------------------------------
*September 6, 2018*

### Changed
- Menu component now using borders rather than box-shadow.


v0.76.0
------------------------------
*September 5, 2018*

### Changed
- Updated formToggle count styling
- Changed formToggle class modifier `--withCount` to `--hasCount`

### Fixed
- Fixed formToggle large touch area class to target narrow screens only


v0.75.0
------------------------------
*September 5, 2018*

### Added
- Menu component condensed modifier.
- Menu component horizontal modifier.
- Moved more CSS values into SCSS variables.

### Changed
- Updated package dependencies.

### Removed
- Removed Node v6 Travis build until a fix for the object spread error has been completed.


v0.74.1
------------------------------
*September 5, 2018*

### Fixed
 - Fullscreen popover content styles to be within media breakpoint


v0.74.0
------------------------------
*September 4, 2018*

### Added
- Added `--noPad` modifier to `c-badge`
- Added `c-listing-item-premier` (Local legend badge) styling

### Changed
- Updating listing component by removing text divider and badge styles to now use c-badge


v0.73.0
------------------------------
*September 4, 2018*

### Changed
- Optional `c-menu` component.

### Changed
- `l-inlined` extended so that it can be referenced as a placeholder.
- `$truncation-boundary` parameter is now optional on the `truncate` mixin.


v0.72.0
------------------------------
*September 4, 2018*

### Added
- Added fullScreenPopOver content section to allow for large content within popOvers

### Changed
- Changed fullScreenPopOver JS to `is-open`


v0.71.0
------------------------------
*September 3, 2018*

### Added
- Added additional modifiers to formToggle to help change style between mobile and desktop

### Changed
- Content title width
- Changed listing content widths
- Changed positioning of listing meta block between mid and wide


v0.70.0
------------------------------
*August 31, 2018*

### Added
- Added `u-spacingTop--large` utility class.

### Changed
- Applied border radius to angled badges.


v0.69.0
------------------------------
*August 31, 2018*

### Added
- Added `c-badge--success`.
- Added `c-badge--important`.
- Added `c-badge--award`.
- Added `c-badge--angled`.

### Changed
- Updated `c-badge` padding.


v0.68.0
------------------------------
*August 30, 2018*

### Added
- Added `u-spacingBottom--large` helper.

### Changed
- Updated heading font weight to match latest UI designs.
- Increased default star rating size.


v0.67.0
------------------------------
*August 30, 2018*

### Changed
- Updated listing tile styling


v0.66.0
------------------------------
*August 29, 2018*

### Changed
- Update styles within listings component to target svg to work with inline-svg helper
- Update styles within form toggle component to target svg to work with inline-svg helper


v0.65.0
------------------------------
*August 29, 2018*

### Changed
- Changed page banner image media query.
- Updated component documentation.


v0.64.0
------------------------------
*August 28, 2018*

### Added
- Spacing between spans inside the `c-badge` component.


v0.63.0
------------------------------
*August 28, 2018*

### Removed
- Decoration images.
- Copy assets config from `package.json`.


v0.62.0
------------------------------
*August 24, 2018*

### Added
- `o-body` object styles.
- `c-card` modifier.
- Optional `c-pageBanner` component.
- Rays images.

### Changed
- `c-mediaElement` image border radius.
- Updated npm test script.

### Fixed
- Extra space in utilities styles.
- Documentation links in components.



v0.61.0
------------------------------
*August 23, 2018*

### Added
- Centre align layout utility.
- No underline utility.

### Removed
- Media element centered element.
- Removed fullstack mediaElement width restraint on smaller screens.


v0.60.2
------------------------------
*August 23, 2018*

### Changed
- Updated Jest coverage directory.

### Removed
- Packagephobia badge.


v0.60.1
------------------------------
*August 22, 2018*

### Added
- Coveralls module.
- Coveralls and packagephobia badges.

### Changed
- Updated Travis config.


v0.60.0
------------------------------
*August 22, 2018*

### Added
- Media element centered element.


v0.59.1
------------------------------
*August 22, 2018*

### Changed
 - Change content header action hover state from no decoration normal and underline when hovered.


v0.59.0
------------------------------
*August 22, 2018*

### Added
- `is-sticky` utility class and styles


v0.58.0
------------------------------
*August 22, 2018*

### Added
- New badge component modifiers

### Fixed
- Added prefix to badge component classes.


v0.57.0
------------------------------
*August 21, 2018*

### Added
- `c-mediaElement` element and modifier added.


v0.56.0
------------------------------
*August 21, 2018*

### Added
- Optional `badge` component.

### Changed
- `card` component modifiers.
- Applied relative position to `card` component.


v0.55.0
------------------------------
*August 20, 2018*

### Added
 - Added spacing utility classes.


v0.54.0
------------------------------
*August 16, 2018*

### Added
 - Addition of `has-noItems` class and styling to `.c-listing` item. (removes border).


v0.53.4
------------------------------
*August 15, 2018*

### Changed
 - Change formToggle from CSS based icon to SVG f-icon asset


v0.53.3
------------------------------
*August 15, 2018*

### Fixed
 - Fullscreen popover background to grey--offWhite instead of white.
 - Fullscreen popover header/footer background colour set to white due to popover background colour change


v0.53.2
------------------------------
*August 14, 2018*

### Fixed
 - Fixed formToggle hover state - Only checked state is applied to < mid. >=mid has hover and checked states.


v0.53.1
------------------------------
*August 2, 2018*

### Fixed
 - Fixed stars look like selectable when the input is disabled.


v0.53.0
------------------------------
*August 2, 2018*

### Added
 - addition of .o-formToggle--disabled state styles
 - addition of form toggle inline spacing to give 44px touch area
 - addition of cursor pointer of form toggle hover

### Fixed
 - height unit on fullScreenOverlay from vh to % as Android didnt take into account browser bars making 100vh larger than 100%


v0.52.0
------------------------------
*July 27, 2018*

### Changed
 - Update of font styles to content header
 - Addition of subTitle styles to content header


v0.51.2
------------------------------
*July 25, 2018*

### Changed
 - Remove of margin top on listing item meta block to change to a <p> for better screen reader experience


v0.51.1
------------------------------
*July 23, 2018*

### Fixed
 - A minor layout fix for the form toggle control


v0.51.0
------------------------------
*July 20, 2018*

### Added
- Form toggle object
- Mobile pop over component
- Mobile (scroll only) carousel component
- Content title component

### Changed
- Addition of JS toggle classes (`active`, `inactive`) to listing component


v0.50.1
------------------------------
*July 3, 2018*

### Fixed
- Ratings star count fix, changed from 25 (test amount) back to 6.


v0.50.0
------------------------------
*July 3, 2018*

### Added
- Text utility classes for `text-highlight` and `text-indent`


v0.49.0
------------------------------
*July 3, 2018*

### Changed
- Updated styling on listing component, improved layout on smallest variation of screens

### Added
- Addition of new breakpoint, tiny


v0.48.0
------------------------------
*July 2, 2018*

### Added
- SERP header with alternative variations


v0.47.0
------------------------------
*June 29, 2018*

### Added
- Styling for address elements


v0.46.0
------------------------------
*June 28, 2018*

### Added
- Addition of variation to c-card padding

### Changed
- Changed border utility to be a mixin so can be used within a breakpoint mixin. In this case it was to create a class that was only bordered after a certain width
- Updated and extended listing styles to match current variation of visuals.
- Variation to c-card padding, changed border utility to be a mixin so it can be included within a breakpoint without code duplication, updated listing component to current variations of design
- Updated rating widths to allow for spacing new (compressed) rating icons have


v0.45.0
------------------------------
*June 22, 2018*

### Changed
- Font size for default and narrow screens. `large--scaleUp` renamed to `large--scaleDown`


v0.44.0
------------------------------
*May 14, 2018*

### Added
- `u-textPad` utility class added for padding text

### Changed
- Updated ordered list styling
- Updated typography utility classes so that `.alpha`, `.beta`, `.gamma`, `.gamma` and `.delta` all match header styles when applied


v0.43.0
------------------------------
*May 1, 2018*

### Added
- Pull Request Template Added to repo

### Removed
- Removing a couple of buttons that are no longer in the brand guidelines


v0.42.2
------------------------------
*April 30, 2018*

### Fixed
- Broken build is fixed. It was depending on an icon that isn't always present in the ratings.


v0.42.1
------------------------------
*April 30, 2018*

### Fixed
- Green light colour variable name is fixed.


v0.42.0
------------------------------
*April 26, 2018*

### Changed
- fozzie-colour-palette version is updated


v0.41.1
------------------------------
*April 25, 2018*

### Added
- Focus outline to buttons with the class `o-btnLink`.


v0.41.0
------------------------------
*April 20, 2018*

### Fixed
- Button font size rendered larger due to v0.38.0 release so fix applied here.


v0.40.0
------------------------------
*April 19, 2018*

### Added
- Enhanced `c-alert` component styling


v0.39.0
------------------------------
*April 17, 2018*

### Added
- Selectable star ratings
- Non selectable star ratings
- Mixin to generate fill classes for ratings


v0.38.0
------------------------------
*April 10, 2018*

### Changed
- Font size variable map updated.


v0.37.0
------------------------------
*March 16, 2018*

### Fixed
- Table border style flipped to fix rowspan columns.


v0.36.0
------------------------------
*March 12, 2018*

### Fixed
- Removed unnecessary *$* infront of zIndex variable.


v0.35.0
------------------------------
*March 9, 2018*

### Added
- Dangerfile check to validate PR titles with respect to version numbers
- Basic CODEOWNERS file added

### Changed
- Licence updated


v0.34.0
------------------------------
*March 8, 2018*

### Added
- Styling for radio buttons and checkboxes (crosses and ticks)


v0.33.0
------------------------------
*February 28, 2018*

### Added
- Listing - An element that allows display of vertically stacked content e.g. a list.


v0.32.0
------------------------------
*February 23, 2018*

### Removed
- `plugins`, `env` and most of the `rules` from `.eslintrc` to fix some errors encountered when running gulp.
- `yarn start` and `yarn lint` scripts. These are now part of `yarn prepare`, which runs `gulp --prod`.
- `scripts-info` section from `package.json` and `npm-scripts-info` dependency.

### Added
- `breakpointHelper.js` to handle CSS breakpoints.
- `index.js` as the module entrypoint.
- JS unit tests.
- Dependencies on `f-dom` and `js-test-buddy`.
- `_breakpoints.scss` to `scss/tools/` directory.
- `getCurrentScreenWidth()` which returns `'narrow'`, `'mid'`, `'wide'`, `'huge'`, or `false` if no breakpoints are defined.
- JS files to `dist/js` folder.
- `yarn compile` and `yarn test`.

### Changed
- `yarn prepare` now runs `gulp --prod`.
- `yarn lint` lints JS and SCSS.


v0.31.0
------------------------------
*February 22, 2018*

### Changed
- *Nothing to see here...*


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
