import FontFaceObserver from 'fontfaceobserver';
import TestUtils from 'js-test-buddy';
import { stopFoit } from '../index';

describe('module stopFoit', () => {
    it('adds `has-fontsLoaded--headings` to the body when Ubunto webfont has loaded', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
        `);

        // Act
        stopFoit();

        // Assert
        const headingFont = new FontFaceObserver('Ubuntu');
        headingFont.load().then(() => {
            expect(document.body.classList.contains('has-fontsLoaded--headings')).toBe(true);
        });
    });

    it('adds `has-fontsLoaded--base` to the body when Ubunto webfont has loaded', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <link href="https://fonts.googleapis.com/css?family=Hind+Vadodara" rel="stylesheet">
        `);

        // Act
        stopFoit();

        // Assert
        const baseFont = new FontFaceObserver('Hind Vadodara');
        baseFont.load().then(() => {
            expect(document.body.classList.contains('has-fontsLoaded--base')).toBe(true);
        });
    });
});
