import {useEffect, useState} from 'react';
import Markdown from "react-markdown";

export default function App() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const loadMarkdown = async () => {
            const res = await fetch(
                'https://raw.githubusercontent.com/robvanderleek/mdrender/refs/heads/main/README.md');
            setContent(await res.text());
        }
        loadMarkdown();
    });

    return (
        <main className="container">
            <Markdown>{content}</Markdown>
        </main>
    );
}