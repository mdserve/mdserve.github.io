import Markdown, {UrlTransform} from "react-markdown";
import rehypeRaw from "rehype-raw";

interface RenderProps {
    content: string;
    urlTransform?: UrlTransform | undefined;
}

export default function Render(props: RenderProps) {
    return (
        <Markdown rehypePlugins={[rehypeRaw]} urlTransform={props.urlTransform}>{props.content}</Markdown>
    )
}