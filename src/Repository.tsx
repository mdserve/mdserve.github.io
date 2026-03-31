import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {isAbsoluteUrl} from "./utils";
import Render from "./Render";

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

    const urlTransform = (url: string) => {
        if (!isAbsoluteUrl(url)) {
            return `https://raw.githubusercontent.com/${getSlug()}/refs/heads/main/${url}`;
        }
        return url;
    }

    return (<Render content={content} urlTransform={urlTransform}/>);
}