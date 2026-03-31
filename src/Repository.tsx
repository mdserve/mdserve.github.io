import Markdown from "react-markdown";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {isAbsoluteUrl} from "./utils";
import rehypeRaw from "rehype-raw";

export default function Repository() {
    const [content, setContent] = useState<string>('');
    const params = useParams();

    useEffect(() => {
        const loadMarkdown = async () => {
            const res = await fetch(
                `https://raw.githubusercontent.com/${getSlug()}/refs/heads/main/README.md`);
            const text = await res.text();
            setContent(text);
        }
        loadMarkdown();
    });

    const getSlug = (): string => {
        const user = params.user;
        const repo = params.repo;
        if (user === undefined || repo === undefined) {
            return 'mdserve/mdserve.github.io';
        } else {
            return `${user}/${repo}`;
        }
    }

    return (
        <main className="container">
            <Markdown rehypePlugins={[rehypeRaw]} urlTransform={url => {
                if (!isAbsoluteUrl(url)) {
                    return `https://raw.githubusercontent.com/${getSlug()}/refs/heads/main/${url}`;
                }
                return url;
            }}>{content}</Markdown>
        </main>
    );
}