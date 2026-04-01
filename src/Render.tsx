import Markdown, {UrlTransform} from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

interface RenderProps {
    content: string;
    urlTransform?: UrlTransform | undefined;
}

export default function Render(props: RenderProps) {
    return (
        <Markdown rehypePlugins={[rehypeRaw, rehypeSlug, rehypeHighlight]}
                  urlTransform={props.urlTransform}>{props.content}</Markdown>
    )
}