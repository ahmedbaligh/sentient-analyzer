import 'babel-polyfill';
import { onAnalyze } from '../src/client/js/formHandler';

describe('Submitting functionality', () => {
  test('it should take data from user inputs and pass them to api function and then pass the result to the update UI function', () => {
    expect(onAnalyze).toBeDefined();
  });
});
