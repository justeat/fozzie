/**
 * @overview Breakpoint handler
 * 
 * @module breakpointHelper
 */

export const getBreakpoints = function () {
    $("body").append('<div class="c-screen-sizer"></div>');
    var breakpoints = $(".c-screen-sizer").css("content").split(",");
    var output = {}

    breakpoints.forEach(() => {
        let bp = breakpoints[i].split(':');
        output.append(`${bp[0]} : ${bp[1]}`);
    });

    return output;
};
