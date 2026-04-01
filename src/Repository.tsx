import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {isAbsoluteUrl} from "./utils";
import Render from "./Render";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

export default function Repository() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<string>('');
    const params = useParams();
    const user = params.user;
    const repo = params.repo;

    useEffect(() => {
        const loadMarkdown = async () => {
            const res = await fetch(
                `https://raw.githubusercontent.com/${getSlug()}/refs/heads/main/README.md`);
            const text = await res.text();
            setContent(text);
            setLoading(false);
        }
        loadMarkdown();
    });

    const getSlug = (): string => {
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

    if (loading) {
        return (<LoadingScreen/>);
    } else {
        return (
            <>
                <Render content={content} urlTransform={urlTransform}/>
                <Footer user={user} source={`https://github.com/${getSlug()}`}/>
            </>
        );
    }
}