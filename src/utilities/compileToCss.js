// eslint-disable-next-line import/no-extraneous-dependencies
const sass = require('sass');
const getDirectories = require('./getDirectories');
// const path = require('path');

// const scssAbsolutePath = path.join(path.resolve(__dirname), '..', 'test', 'scss', 'data', 'fozzie-snapshot.scss');

/**
 * Compiles an SCSS file to a string of CSS
 * @param {string} scssPath an absolute path to an SCSS file to compile
 * @param {Object} options a configuration object
 * @param {boolean} options.useLegacyRenderer whether or not to use the legacy sass renderSync function. This should be true if calling the function from a test runner such as Jest.
 * @returns string - The compiled CSS
 */
const compileToCSS = (scssPath, { useLegacyRenderer }) => {
    const loadPaths = [
        // make all SCSS directories available so lines like `@use 'fozzie' as f` work without requiring relative paths
        ...getDirectories.getAllSubdirectories('./src/scss'),
        'node_modules'
    ];

    if (useLegacyRenderer) {
        const result = sass.renderSync({
            file: scssPath,
            includePaths: loadPaths
        });

        return result.css.toString();
    }

    const result = sass.compile(scssPath, { loadPaths });

    return result.css;
};

// const cssResult = compileToCSS(scssAbsolutePath, { useLegacyRenderer: true });
// console.log(cssResult);

module.exports = {
    compileToCSS
};
