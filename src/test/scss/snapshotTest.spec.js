const path = require('path');
const cssCompilationHelpers = require('../../utilities/compileToCss');


describe('Compiled CSS output', () => {
    it('compiles and matches snapshot', () => {
        // arrange
        const scssAbsolutePath = path.join(path.resolve(__dirname), 'data', 'fozzie-snapshot.scss');

        // act
        const cssResult = cssCompilationHelpers.compileToCSS(scssAbsolutePath, { useLegacyRenderer: true });

        // assert
        console.log(cssResult);
        expect(cssResult).toMatchSnapshot();
    });
});
