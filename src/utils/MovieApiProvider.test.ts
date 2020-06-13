import { getApiEndpoint } from './MovieApiProvider';

describe('MovieApiProvider.ts', () => {
    test('getApiEndpoint', () => {
        const url = 'http://fake-api-endpoint.com/';
        const key = 'fake-api-key';
        const expected = 'http://fake-api-endpoint.com/?apiKey=fake-api-key'; 

        expect(getApiEndpoint(url, key)).toBe(expected);
    });
});