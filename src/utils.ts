export function isAbsoluteUrl(url: string) {
    const re = new RegExp('^(?:[a-z+]+:)?//', 'i');
    return re.test(url);
}