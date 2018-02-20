import TestUtils from 'js-test-buddy';
import { getBreakpoints, currentScreenWidth } from '../';

describe('getBreakpoints', () => {

    beforeEach(() => {
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                display: none;
                content: 'narrow:414px,mid:768px,wide:1025px,huge:1280px';
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
        expect(breakpoints.narrow).not.toBeUndefined();
        expect(breakpoints.mid).not.toBeUndefined();
        expect(breakpoints.wide).not.toBeUndefined();
        expect(breakpoints.huge).not.toBeUndefined();
    });

    it('should return breakpoints in pixels', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.narrow.slice(-2)).toBe('px');
        expect(breakpoints.mid.slice(-2)).toBe('px');
        expect(breakpoints.wide.slice(-2)).toBe('px');
        expect(breakpoints.huge.slice(-2)).toBe('px');
    });

    it('should return breakpoints with expected values', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.narrow.slice(0, -2)).toBe('414');
        expect(breakpoints.mid.slice(0, -2)).toBe('768');
        expect(breakpoints.wide.slice(0, -2)).toBe('1025');
        expect(breakpoints.huge.slice(0, -2)).toBe('1280');
    });

});

describe('currentScreenWidth', () => {

    it('returns a string if breakpoints are defined correctly', () => {
        // Arrange
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                display: none;
                content: 'narrow:414px,mid:768px,wide:1025px,huge:1280px';
            }
        </style>
        `);

        // Act
        const width = currentScreenWidth();

        // Assert
        expect(typeof width).toBe('string');
    });

    it('returns false if no breakpoints are defined', () => {
        // Arrange
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                display: none;
            }
        </style>
        `);

        // Act
        const width = currentScreenWidth();

        // Assert
        expect(width).toBe(false);
    });

});
