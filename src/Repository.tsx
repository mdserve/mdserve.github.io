import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {urlTransformer} from "./utils";
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
            const url = `https://raw.githubusercontent.com/${getSlug()}/refs/heads/main/README.md`;
            const res = await fetch(url);
            const text = await res.text();
            setContent(text);
            setLoading(false);
        }
        loadMarkdown();
    }, []);

    const getSlug = (): string => {
        if (user === undefined) {
            return 'mdserve/mdserve';
        } else if (repo === undefined) {
            return `${user}/${user}`;
        } else {
            return `${user}/${repo}`;
        }
    }

    if (loading) {
        return (<LoadingScreen/>);
    } else {
        return (
            <>
                <Render content={content} urlTransform={urlTransformer(getSlug())}/>
                <Footer user={user} source={`https://github.com/${getSlug()}`}/>
            </>
        );
    }
}