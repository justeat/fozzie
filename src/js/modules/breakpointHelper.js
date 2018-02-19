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

    breakpoints.forEach(breakpoint => {
        const [breakpointName, breakpointValue] = breakpoint.split(':');
        output[breakpointName] = breakpointValue;
    });

    return output;
};
