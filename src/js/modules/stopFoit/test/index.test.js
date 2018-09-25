import FontFaceObserver from 'fontfaceobserver';
import TestUtils from 'js-test-buddy';
import { stopFoit } from '../index';

jest.mock('fontfaceobserver');

describe('module stopFoit', () => {
    describe('when the fonts load correctly', () => {
        beforeAll(() => {
            FontFaceObserver.mockImplementation(() => ({
                load: () => new Promise(resolve => {
                    resolve();
                })
            }));
        });

        it('adds `has-fontsLoaded--headings` to the body when Ubunto webfont has loaded', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver).toBeCalled();
                expect(document.body.classList.contains('has-fontsLoaded--headings')).toBe(true);
            }, 100);
        });

        it('adds `has-fontsLoaded--base` to the body when Hind Vadodara webfont has loaded', async () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara" rel="stylesheet">
            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver).toBeCalled();
                expect(document.body.classList.contains('has-fontsLoaded--base')).toBe(true);
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
            stopFoit();

            // Assert
            expect(FontFaceObserver.rejects);
        });

        it('does not add any font loaded classes to the body', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(document.body.classList.contains('has-fontsLoaded--base')).toBe(false);
                expect(document.body.classList.contains('has-fontsLoaded--headings')).toBe(false);
            }, 100);
        });
    });
});
