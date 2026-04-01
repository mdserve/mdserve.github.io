import {isAbsoluteUrl, urlTransformer} from "./utils";

test('URL transformer', () => {
    const slug = 'robvanderleek/robvanderleek';
    const githubUrl = `https://github.com/${slug}/blob/main/welcome.gif`;
    const rawUrl = `https://raw.githubusercontent.com/${slug}/refs/heads/main/welcome.gif`;

    expect(urlTransformer(slug)(githubUrl)).toBe(rawUrl);
});

test('is absolute URL', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true);
    expect(isAbsoluteUrl('src/logo.png')).toBe(false);
});