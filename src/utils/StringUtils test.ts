import { containsSubstring } from "./StringUtils";

test('containsSubstring finds needle in haystack', () => {
    const needle = 'found';
    const haystack = "I'll never be found";
    const expected = false;

    expect(containsSubstring(needle, haystack)).toBe(expected);
});