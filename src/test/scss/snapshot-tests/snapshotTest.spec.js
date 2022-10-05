const path = require('path');
const cssCompiler = require('../../../utilities/compileToCss');

describe('Compiled CSS output', () => {
    it('compiles the expected CSS', () => {
        // arrange
        const scssAbsolutePath = path.join(path.resolve(__dirname), '..', 'data', 'fozzie-snapshot.scss');

        // act
        const cssResult = cssCompiler.compileToCSS({ scssPath: scssAbsolutePath, useLegacyRenderer: true });

        // assert
        expect(cssResult).toMatchSnapshot();
    });

    it('does not render any CSS if nothing is called', () => {
        // act
        const cssResult = cssCompiler.compileToCSS({ scssString: "@use 'fozzie' as f;", useLegacyRenderer: true });

        // assert
        expect(cssResult).toMatchSnapshot();
    });
});
