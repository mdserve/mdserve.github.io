import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {getDefaultBranch, urlTransformer} from "./utils";
import Render from "./Render";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

export default function Repository() {
    const [loading, setLoading] = useState(true);
    const [branch, setBranch] = useState("");
    const [folder, setFolder] = useState("");
    const [content, setContent] = useState<string>('');
    const params = useParams();
    const {user, repo, '*': path} = params;

    useEffect(() => {
        const loadMarkdown = async () => {
            const slug = getSlug();
            const defaultBranch = await getDefaultBranch(slug);
            const baseUrl = `https://raw.githubusercontent.com/${slug}/refs/heads/${defaultBranch}/`;
            let res;
            if (path) {
                res = await fetch(`${baseUrl}/${path}`);
                setFolder(path.substring(0, path.lastIndexOf('/')));
                if (res.status === 404) {
                    res = await fetchReadme(`${baseUrl}/${path}`);
                    setFolder(path);
                }
            } else {
                res = await fetchReadme(baseUrl);
            }
            const text = await res.text();
            setBranch(defaultBranch);
            setContent(text);
            setLoading(false);
        }
        loadMarkdown();
    }, []);

    const fetchReadme = async (url: string): Promise<Response> => {
        let res = await fetch(`${url}/README.md`);
        if (res.status === 404) {
            res = await fetch(`${url}/readme.md`);
        }
        return res;
    }

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
                <Render content={content} urlTransform={urlTransformer(getSlug(), branch, folder)}/>
                <Footer user={user} source={`https://github.com/${getSlug()}`}/>
            </>
        );
    }
}