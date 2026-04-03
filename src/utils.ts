export function urlTransformer(slug: string, branch: string): (url: string) => string {
    return function (url: string): string {
        let result;
        if (url.startsWith('#')) {
            result = url;
        } else if (isAbsoluteUrl(url)) {
            result = url.replace(`github.com/${slug}/blob/`, `raw.githubusercontent.com/${slug}/refs/heads/`);
        } else if (url.startsWith('@gist/')) {
            result = url.replace('@', 'https://mdserve.github.io/');
        } else {
            result = `https://raw.githubusercontent.com/${slug}/refs/heads/${branch}/${url}`;
        }
        return result;
    }
}

export function isAbsoluteUrl(url: string) {
    const re = new RegExp('^(?:[a-z+]+:)?//', 'i');
    return re.test(url);
}

export async function getDefaultBranch(slug: string): Promise<string> {
    const res = await fetch(`https://api.github.com/repos/${slug}`);
    const json = await res.json();
    return json['default_branch'];
}