const path = require('path');
const cssCompiler = require('../../../utilities/compileToCss');
const cssLinter = require('../../../utilities/cssLinter');

describe('Compiled CSS output', () => {
    it('compiles the expected CSS', () => {
        // arrange
        const scssAbsolutePath = path.join(path.resolve(__dirname), '..', 'data', 'fozzie-snapshot.scss');

        // act
        const cssResult = cssCompiler.compileToCSS({ scssPath: scssAbsolutePath, useLegacyRenderer: true });

        // assert
        expect(cssResult).toMatchSnapshot();
    });

    // TODO: add tests to ensure that simply calling `@use 'fozzie'` does not render any styles/comments

    // TODO: Our compiled CSS is not currently valid! We should fix this and enable this test in the near future
    // it('Outputs valid CSS', async () => {
    //     // arrange
    //     const scssAbsolutePath = path.join(path.resolve(__dirname), '..', 'data', 'fozzie-snapshot.scss');

    //     // act
    //     const cssResult = cssCompiler.compileToCSS({ scssPath: scssAbsolutePath, useLegacyRenderer: true });

    //     // assert
    //     const lintResult = await cssLinter.lintCSS(cssResult);

    //     expect(lintResult.errored).toBe(false);
    // });
});
