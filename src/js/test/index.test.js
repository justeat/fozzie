import TestUtils from 'js-test-buddy';
import { getBreakpoints } from '../';

describe('getBreakpoints', () => {

    beforeEach(() => {
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                display: none;
                content: 'small:414px,medium:768px,large:1025px,xlarge:1280px';
            }
        </style>
        `);
    });

    it('should return an object', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(typeof breakpoints).toBe('object');
    });

    it('should return multiple breakpoints', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(Object.entries(breakpoints).length > 1);
    });

    it('should return breakpoints with expected names', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.small).not.toBeUndefined();
        expect(breakpoints.medium).not.toBeUndefined();
        expect(breakpoints.large).not.toBeUndefined();
        expect(breakpoints.xlarge).not.toBeUndefined();
    });

    it('should return breakpoints in pixels', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.small.slice(-2)).toBe('px');
        expect(breakpoints.medium.slice(-2)).toBe('px');
        expect(breakpoints.large.slice(-2)).toBe('px');
        expect(breakpoints.xlarge.slice(-2)).toBe('px');
    });

    it('should return breakpoints with expected values', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.small.slice(0, -2)).toBe('414');
        expect(breakpoints.medium.slice(0, -2)).toBe('768');
        expect(breakpoints.large.slice(0, -2)).toBe('1025');
        expect(breakpoints.xlarge.slice(0, -2)).toBe('1280');
    });

});
