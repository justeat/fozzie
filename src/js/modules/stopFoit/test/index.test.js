import FontFaceObserver from 'fontfaceobserver';
import TestUtils from '@justeat/js-test-buddy';
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

        it('removes `is-fontsLoading--headings` from the body when Ubunto webfont has loaded', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
                <body class="is-fontsLoading--headings"></body>
            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver).toBeCalled();
                expect(document.body.classList.contains('has-fontsLoaded--headings')).toBe(false);
            }, 100);
        });

        it('removes `is-fontsLoading--base` from the body when Hind Vadodara webfont has loaded', async () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara" rel="stylesheet">
                <body class="is-fontsLoading--base"></body>
            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(FontFaceObserver).toBeCalled();
                expect(document.body.classList.contains('is-fontsLoading--base')).toBe(false);
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
            setTimeout(() => {
                expect(FontFaceObserver.rejects).toHaveBeenCalled();
            }, 100);
        });

        it('does not add any font loaded classes to the body', () => {
            // Arrange
            TestUtils.setBodyHtml(`
                <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
                <body class="is-fontsLoading--base is-fontsLoading--headings"></body>

            `);

            // Act
            stopFoit();

            // Assert
            setTimeout(() => {
                expect(document.body.classList.contains('is-fontsLoading--base')).toBe(true);
                expect(document.body.classList.contains('is-fontsLoading--headings')).toBe(true);
            }, 100);
        });
    });
});
