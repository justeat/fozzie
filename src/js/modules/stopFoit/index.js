import FontFaceObserver from 'fontfaceobserver';
import { logError } from '@justeat/f-logger';

/**
 * @overview stopFOIT reduces the amount of time a user has invisible text when using webfonts.
 *
 * @module stopFOIT
 */

/**
* Init method initialises the FontFaceObserver events
*
*/

export const stopFoit = () => {
    // Create a new `FontFaceObserver` for each webfont
    const baseFont = new FontFaceObserver('Hind Vadodara');
    const headingFont = new FontFaceObserver('Ubuntu');

    // On load of each font we add `has-fontsLoaded` class with the font type modifier
    baseFont.load(null, 3000).then(() => {
        document.body.classList.remove('is-fontsLoading--base');
    }).catch(() => {
        logError('Custom font is unable to load');
    });

    headingFont.load(null, 3000).then(() => {
        document.body.classList.remove('is-fontsLoading--heading');
    }).catch(() => {
        logError('Custom font is unable to load');
    });
};

export default stopFoit;
