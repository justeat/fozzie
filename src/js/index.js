import { stopFoit } from './modules/stopFoit';

// All helper functions will be imported here, so that they can all be exported within one object.
import { getBreakpoints, getCurrentScreenWidth, withinBreakpoint } from './modules/breakpointHelper';

export {
    stopFoit,
    getBreakpoints,
    getCurrentScreenWidth,
    withinBreakpoint
};
