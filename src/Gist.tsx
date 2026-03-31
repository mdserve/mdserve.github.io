import Markdown from "react-markdown";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {isAbsoluteUrl} from "./utils";
import rehypeRaw from "rehype-raw";

export default function Gist() {
    const [content, setContent] = useState<string>('');
    const params = useParams();

    useEffect(() => {
        const loadMarkdown = async () => {
            const user = params.user;
            const id = params.id;
            const res = await fetch(`https://gist.githubusercontent.com/${user}/${id}/raw`);
            const text = await res.text();
            setContent(text);
        }
        loadMarkdown();
    });

    return (
        <main className="container">
            <Markdown rehypePlugins={[rehypeRaw]} urlTransform={url => {
                if (!isAbsoluteUrl(url)) {
                    return `https://raw.githubusercontent.com/refs/heads/main/${url}`;
                }
                return url;
            }}>{content}</Markdown>
        </main>
    );
}