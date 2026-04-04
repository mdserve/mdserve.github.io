import {isAbsoluteUrl, urlTransformer} from "./utils";

test('URL transformer, GitHub blob urls', () => {
    const slug = 'robvanderleek/robvanderleek';
    const githubUrl = `https://github.com/${slug}/blob/main/welcome.gif`;
    const rawUrl = `https://raw.githubusercontent.com/${slug}/refs/heads/main/welcome.gif`;

    expect(urlTransformer(slug, 'main')(githubUrl)).toBe(rawUrl);
});

test('URL transformer, @gist links', () => {
    const url = '@gist/robvanderleek/0143ca69332ec6ffe50b12d3a7d4fb5e';
    const absoluteUrl = `/gist/robvanderleek/0143ca69332ec6ffe50b12d3a7d4fb5e`;

    expect(urlTransformer('', '')(url)).toBe(absoluteUrl);
});

test('URL transformer, relative Markdown links', () => {
    const url = 'notes/1/README.md';
    const absoluteUrl = `/robvanderleek/notes/notes/1/README.md`;

    expect(urlTransformer('robvanderleek/notes', 'main')(url)).toBe(absoluteUrl);
});

test('URL transformer, relative content links', () => {
    const url = 'screenshot.png';
    const path = 'notes/1';
    const absoluteUrl = `https://raw.githubusercontent.com/robvanderleek/notes/refs/heads/main/notes/1/screenshot.png`;

    expect(urlTransformer('robvanderleek/notes', 'main', path)(url)).toBe(absoluteUrl);
});

test('URL transformer, anchor links', () => {
    expect(urlTransformer('', '')('#welcome')).toBe('#welcome');
});

test('is absolute URL', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true);
    expect(isAbsoluteUrl('src/logo.png')).toBe(false);
});