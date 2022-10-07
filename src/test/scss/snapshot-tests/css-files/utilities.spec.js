const path = require('path');
const cssCompiler = require('../../../../utilities/compileToCss');

describe('fozzie-utilities.scss', () => {
    it('compiles the expected CSS', () => {
        // arrange
        const scssAbsolutePath = path.join(process.cwd(), 'src', 'scss', 'fozzie-utilities.scss');

        // act
        const cssResult = cssCompiler.compileToCSS({ scssPath: scssAbsolutePath, useLegacyRenderer: true });

        // assert
        expect(cssResult).toMatchSnapshot();
    });
});
