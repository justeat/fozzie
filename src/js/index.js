import { hasFontLoaded } from './modules/hasFontLoaded';

// All helper functions will be imported here, so that they can all be exported within one object.
import { getBreakpoints, getCurrentScreenWidth, isWithinBreakpoint } from './modules/breakpointHelper';

export {
    hasFontLoaded,
    getBreakpoints,
    getCurrentScreenWidth,
    isWithinBreakpoint
};
