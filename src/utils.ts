export function urlTransformer(slug: string): (url: string) => string {
    return function (url: string): string {
        let result;
        if (isAbsoluteUrl(url)) {
            if (url.startsWith('#')) {
                result = url;
            }
            result = url.replace(`github.com/${slug}/blob/`, `raw.githubusercontent.com/${slug}/refs/heads/`);
        } else {
            result = `https://raw.githubusercontent.com/${slug}/refs/heads/main/${url}`;
        }
        return result;
    }
}

export function isAbsoluteUrl(url: string) {
    const re = new RegExp('^(?:[a-z+]+:)?//', 'i');
    return re.test(url);
}