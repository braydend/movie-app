export function containsSubstring(needle: string, haystack: string) {
    return haystack.toLocaleLowerCase().includes(needle);
};