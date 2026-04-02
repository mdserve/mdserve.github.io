import {isAbsoluteUrl, urlTransformer} from "./utils";

test('URL transformer, GitHub blob urls', () => {
    const slug = 'robvanderleek/robvanderleek';
    const githubUrl = `https://github.com/${slug}/blob/main/welcome.gif`;
    const rawUrl = `https://raw.githubusercontent.com/${slug}/refs/heads/main/welcome.gif`;

    expect(urlTransformer(slug)(githubUrl)).toBe(rawUrl);
});

test('URL transformer, @gist links', () => {
    const url = '@gist/robvanderleek/0143ca69332ec6ffe50b12d3a7d4fb5e';
    const absoluteUrl = `https://mdserve.github.io/gist/robvanderleek/0143ca69332ec6ffe50b12d3a7d4fb5e`;

    expect(urlTransformer('')(url)).toBe(absoluteUrl);
});

test('URL transformer, anchor links', () => {
    expect(urlTransformer('')('#welcome')).toBe('#welcome');
});

test('is absolute URL', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true);
    expect(isAbsoluteUrl('src/logo.png')).toBe(false);
});