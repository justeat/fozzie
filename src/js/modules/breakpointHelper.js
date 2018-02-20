/**
 * @overview Breakpoint handler
 *
 * @module breakpointHelper
 */

export const getBreakpoints = () => {
    const output = {};

    // Append hidden element to body
    const screenSizer = document.createElement('div');
    screenSizer.classList.add('c-screen-sizer');

    document.body.appendChild(screenSizer);

    // It should have a 'content' property containing the breakpoints
    const breakpoints = window.getComputedStyle(document.querySelector('.c-screen-sizer'))
        .getPropertyValue('content')
        .replace(/"/g, '')
        .replace(/'/g, '')
        .split(',');
        // Gives a list of breakpoints in the form ['narrow:414px', ...etc]

    // When there is no content, at this stage breakpoints should be ['']
    if (breakpoints.length === 1 && breakpoints[0] === '') {
        return output;
    }

    breakpoints.forEach(breakpoint => {
        const [breakpointName, breakpointValue] = breakpoint.split(':');
        // e.g., set 'narrow' to be the property name, and '414px' to be the value
        output[breakpointName] = breakpointValue;
    });

    return output;
};

export const getCurrentScreenWidth = () => {
    const currentWidth = window.innerWidth;

    const breakpoints = getBreakpoints();

    // Order the breakpoints from widest to narrowest,
    // takes the form [['narrow', '414px'], [...etc]]
    const bps = Object.entries(breakpoints).reverse();

    for (let i = 0; i < bps.length; i++) {
        // Loops through the breakpoints (in descending order)
        // returning the first one that is narrower than currentWidth.

        const breakpointWidth = parseInt(bps[i][1], 10); // This also strips the 'px' from the string

        if (i === bps.length - 1) {
            // If we've reached the last breakpoint, and there still hasn't been a match, return the smallest breakpoint
            return bps[i][0];
        } else if (currentWidth > breakpointWidth) {
            return bps[i][0];
        }
    }
    // If no breakpoints have been set
    return false;
};
