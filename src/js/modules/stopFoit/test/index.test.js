import FontFaceObserver from 'fontfaceobserver';
import TestUtils from 'js-test-buddy';
import { stopFoit } from '../index';

jest.mock('fontfaceobserver');

describe('module stopFoit', () => {
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

describe('module stopFoit catches Errors', () => {
    beforeAll(() => {
        FontFaceObserver.mockImplementation(() => ({
            load: () => new Promise((...reject) => {
                reject();
            })
        }));
    });

    it('rejects if fonts do not load', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
        `);

        // Act
        stopFoit();

        // Assert
        expect(FontFaceObserver.rejects);
    });
});
