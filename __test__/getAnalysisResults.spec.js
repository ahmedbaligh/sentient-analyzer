import 'babel-polyfill';
import { getAnalysisResults } from '../src/client/js/api';

describe('API request functionality', () => {
  test('it should make a request to the API using an endpoint and some data', async () => {
    expect(getAnalysisResults).toBeDefined();
  });
});
