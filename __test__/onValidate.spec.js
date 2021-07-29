/**
 * @jest-environment jsdom
 */

import 'babel-polyfill';
import { onValidate } from '../src/client/js/helpers';

describe('Showing validation on UI', () => {
  test('it takes an element and adds or remove the class invalid to it based on its validity', () => {
    expect(onValidate).toBeDefined();

    const button = document.createElement('button');
    button.type = 'submit';
    const form = document.createElement('form');
    form.appendChild(button);

    const inputs = [true, false];
    const outputs = [false, true];

    expect(onValidate(form, inputs[0])).toBe(outputs[0]);
    expect(onValidate(form, inputs[1])).toBe(outputs[1]);
  });
});
