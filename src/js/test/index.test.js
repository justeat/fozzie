import TestUtils from 'js-test-buddy';
import { getBreakpoints, getCurrentScreenWidth } from '../';

describe('getBreakpoints', () => {

    beforeEach(() => {
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
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

    it('should return four breakpoints', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(Object.entries(breakpoints).length === 4);
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

    it('should return breakpoints with expected values in pixels', () => {
        // Act
        const breakpoints = getBreakpoints();

        // Assert
        expect(breakpoints.narrow).toBe('414px');
        expect(breakpoints.mid).toBe('768px');
        expect(breakpoints.wide).toBe('1025px');
        expect(breakpoints.huge).toBe('1280px');
    });

});

describe('currentScreenWidth', () => {

    it('returns a string if breakpoints are defined correctly', () => {
        // Arrange
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                content: 'narrow:414px,mid:768px,wide:1025px,huge:1280px';
            }
        </style>
        `);

        // Act
        const width = getCurrentScreenWidth();

        // Assert
        expect(typeof width).toBe('string');
    });

    it('returns false if no breakpoints are defined', () => {
        // Arrange
        TestUtils.setBodyHtml(`
        <style>
            .c-screen-sizer {
                
            }
        </style>
        `);

        // Act
        const width = getCurrentScreenWidth();

        // Assert
        expect(width).toBe(false);
    });

});
