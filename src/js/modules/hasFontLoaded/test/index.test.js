import FontFaceObserver from 'fontfaceobserver';
import TestUtils from '@justeat/js-test-buddy';
import { hasFontLoaded } from '../index';

jest.mock('fontfaceobserver');

describe('module hasFontLoaded', () => {
    describe('when the fonts load correctly', () => {
        beforeAll(() => {
            FontFaceObserver.mockImplementation(() => ({
                load: () => new Promise(resolve => {
                    resolve();
                })
            }));
        });

        it('adds `webfonts-loaded` to the body when JustEatBasis webfont has loaded', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JustEatBasis-Regular-optimised.woff2" type="font/woff2">
                <body></body>
            `);

            // Act
            hasFontLoaded();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver).toBeCalled();
                expect(document.body.classList.contains('webfonts-loaded')).toBe(true);
            }, 100);
        });
    });

    describe('when the fonts do not load correctly', () => {
        beforeAll(() => {
            FontFaceObserver.mockImplementation(() => ({
                load: () => new Promise((...reject) => {
                    reject();
                })
            }));
        });

        it('causes FontFaceObserver to reject', () => {
            // Arrange
            TestUtils.setBodyHtml('');

            // Act
            hasFontLoaded();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver.rejects).toHaveBeenCalled();
            }, 100);
        });

        it('does not add any font loaded classes to the body', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JustEatBasis-Regular-optimised.woff2" type="font/woff2">
                <body></body>

            `);

            // Act
            hasFontLoaded();

            // Assert
            setTimeout(() => {
                expect(document.body.classList.contains('webfonts-loaded')).toBe(false);
            }, 100);
        });
    });
});
