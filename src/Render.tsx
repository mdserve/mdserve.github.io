import Markdown from "react-markdown";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

export default function Render() {
    const [content, setContent] = useState<string>('');
    const params = useParams();

    useEffect(() => {
        const loadMarkdown = async () => {
            let user = params.user;
            let repo = params.repo;
            if (user === undefined || repo === undefined) {
                user = 'robvanderleek';
                repo = 'mdrender';
            }
            const res = await fetch(
                `https://raw.githubusercontent.com/${user}/${repo}/refs/heads/main/README.md`);
            const text = await res.text();
            setContent(text);
        }
        loadMarkdown();
    });

    return (
        <main className="container">
            <Markdown>{content}</Markdown>
        </main>
    );
}