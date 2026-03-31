import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Render from "./Render";

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

    return (<Render content={content}/>);
}