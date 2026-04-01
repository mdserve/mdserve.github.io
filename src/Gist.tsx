import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Render from "./Render";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";

export default function Gist() {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState<string>('');
    const params = useParams();
    const user = params.user;
    const id = params.id;

    useEffect(() => {
        const loadMarkdown = async () => {
            const res = await fetch(`https://gist.githubusercontent.com/${user}/${id}/raw`);
            const text = await res.text();
            setContent(text);
            setLoading(false);
        }
        loadMarkdown();
    });

    if (loading) {
        return (<LoadingScreen/>);
    } else {
        return (
            <>
                <Render content={content}/>
                <Footer user={user} source={`https://gist.github.com/${user}/${id}`}/>
            </>
        );
    }
}