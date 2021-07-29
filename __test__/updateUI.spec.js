import 'babel-polyfill';
import updateUI from '../src/client/js/updateUI';

describe('Update UI based on API data', () => {
  test('it should take API returned data and update UI accordingly', () => {
    expect(updateUI).toBeDefined();
  });
});
