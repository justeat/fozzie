import FontFaceObserver from 'fontfaceobserver';
import { logError } from '@justeat/f-logger';

/**
 * @overview hasFontLoaded reduces the amount of time a user has invisible text when using webfonts.
 *
 * @module hasFontLoaded
 */

/**
* Init method initialises the FontFaceObserver events
*
*/

export const hasFontLoaded = () => {
    // Create a new `FontFaceObserver` for each webfont
    const baseFont = new FontFaceObserver('JustEatBasis');

    // On load of each font we add `has-fontsLoaded` class with the font type modifier
    baseFont.load(null, 3000).then(() => {
        document.body.classList.add('webfonts-loaded');
    }).catch(() => {
        logError('Custom font is unable to load');
    });
};

export default hasFontLoaded;
