import $ from '@justeat/f-dom';


/**
 * @overview JS form / input reset
 *
 * @module formReset
 */

/**
* Reset inputs loops through all inputs in js reset group [data-js-reset="RESETGROUP"] and sets checked to false or value to "".
*
* @param {event} event
*
*/
export const resetInputs = event => {
    const el = event.target;
    const formInputGroup = el.getAttribute('data-js-reset');
    const formInputs = $(`[data-js-reset-input="${formInputGroup}"]`);

    formInputs.forEach(input => {
        if (input.checked) {
            input.checked = false;
            return;
        }
        if (input.value.length > 0) {
            input.value = '';
        }
    });
};

/**
 * Bind event will check for form reset buttons on the page and add event listeners to each
 *
 */
export const init = () => {
    const resetAction = $('[data-js-reset]');

    if (resetAction.length > 0) {
        resetAction.forEach(button => {
            button.addEventListener('click', event => resetInputs(event));
        });
    }
};

export default init;
