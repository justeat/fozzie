/**
 * @overview Breakpoint handler
 *
 * @module breakpointHelper
 */

export const getBreakpoints = () => {
    const output = {};

    const screenSizer = document.createElement('div');
    screenSizer.classList.add('c-screen-sizer');

    document.body.appendChild(screenSizer);

    const breakpoints = window.getComputedStyle(document.querySelector('.c-screen-sizer'))
        .getPropertyValue('content')
        .replace(/"/g, '')
        .replace(/'/g, '')
        .split(',');

    if (breakpoints.length === 1 && breakpoints[0] === '') {
        // When there is no content
        return output;
    }

    breakpoints.forEach(breakpoint => {
        const [breakpointName, breakpointValue] = breakpoint.split(':');
        output[breakpointName] = breakpointValue;
    });

    return output;
};

function pixelStringToInt (pixels) {
    return parseInt(pixels.slice(0, -2), 10);
}

export const currentScreenWidth = () => {
    const currentWidth = window.innerWidth;

    const breakpoints = getBreakpoints();
    const bps = Object.entries(breakpoints).reverse();

    for (let i = 0; i < bps.length; i++) {
        // Loops through the breakpoints (in descending order) and returns the first one that is smaller than the current window width.
        const pixels = pixelStringToInt(bps[i][1]);

        if (i === bps.length - 1) {
            // If we've reached the last breakpoint, and there still hasn't been a match...
            return bps[i][0];
        } else if (currentWidth > pixels) {
            return bps[i][0];
        }
    }
    return false;
};
