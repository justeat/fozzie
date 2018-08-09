import $ from '@justeat/f-dom';
import TestUtils from 'js-test-buddy';
import { init, resetInputs } from '../index';

describe('module init', () => {
    it('is a function', () => {
        expect(typeof init).toBe('function');
    });

    it('will not error if no [data-js-reset] is available', () => {
        // Arrange
        TestUtils.setBodyHtml('');

        // Act
        init();
        const button = $('[data-js-reset]');

        // Assert
        expect(button.length).toBe(0);
    });

    it('will uncheck a radio buttons from from button trigger bound on init()', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <a data-js-reset="testGroup"></a>
            <input type="radio" data-js-reset-input="testGroup" checked/>
        `);

        // Act
        init();
        const [button] = document.querySelectorAll('[data-js-reset]');
        TestUtils.click(button);

        // Assert
        const [radio] = document.querySelectorAll('[data-js-reset-input]');
        expect(radio.checked).toBe(false);
    });

    it('will clear multiple form elements from button trigger bound on init()', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <a data-js-reset="testGroup"></a>
            <input type="radio" data-js-reset-input="testGroup" checked/>
            <input type="checkbox" data-js-reset-input="testGroup" checked/>
            <input type="text" data-js-reset-input="testGroup" value="testing is good for you" />
        `);

        // Act
        init();
        const [button] = document.querySelectorAll('[data-js-reset]');
        TestUtils.click(button);

        // Assert
        const [radio, checkbox, input] = document.querySelectorAll('[data-js-reset-input]');
        expect(radio.checked).toBe(false);
        expect(checkbox.checked).toBe(false);
        expect(input.value.length).toBe(0);
    });
});

describe('resetInputs', () => {
    it('is a function', () => {
        expect(typeof resetInputs).toBe('function');
    });

    it('should uncheck a radio button', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input type="radio" data-js-reset-input="testGroup" checked/>
        `);

        const event = {
            target: {
                getAttribute:  () => 'testGroup'
            }
        };

        // Act
        resetInputs(event);

        // Assert
        const [radio] = document.querySelectorAll('[data-js-reset-input]');
        expect(radio.checked).toBe(false);
    });

    it('should uncheck a checkbox', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input type="checkbox" data-js-reset-input="testGroup" checked/>
        `);

        const event = {
            target: {
                getAttribute:  () => 'testGroup'
            }
        };

        // Act
        resetInputs(event);

        // Assert
        const [checkbox] = document.querySelectorAll('[data-js-reset-input]');
        expect(checkbox.checked).toBe(false);
    });

    it('should clear the value of a text input', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input type="text" data-js-reset-input="testGroup" value="testing"/>
        `);

        const event = {
            target: {
                getAttribute:  () => 'testGroup'
            }
        };

        // Act
        resetInputs(event);

        // Assert
        const [input] = document.querySelectorAll('[data-js-reset-input]');
        expect(input.value.length).toBe(0);
    });

    it('wont error if reset form button is clicked but no elements need resetting', () => {
        // Arrange
        TestUtils.setBodyHtml(`
            <input type="text" data-js-reset-input="testGroup" value=""/>
            <input type="radio" data-js-reset-input="testGroup" checked/>
            <input type="checkbox" data-js-reset-input="testGroup" checked/>
        `);

        const event = {
            target: {
                getAttribute:  () => 'testGroup'
            }
        };

        // Act
        resetInputs(event);

        // Assert
        const [input, radio, checkbox] = document.querySelectorAll('[data-js-reset-input]');
        expect(input.value.length).toBe(0);
        expect(radio.checked).toBe(false);
        expect(checkbox.checked).toBe(false);
    });
});