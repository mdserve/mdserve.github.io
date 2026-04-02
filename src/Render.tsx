import Markdown, {UrlTransform} from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type {PluggableList} from "unified";

interface RenderProps {
    content: string;
    urlTransform?: UrlTransform | undefined;
}

export default function Render(props: RenderProps) {
    const remarkPlugins = [remarkGfm];
    const rehypePlugins = [rehypeRaw, rehypeSlug, [rehypeHighlight, {detect: true}]] as PluggableList;
    return (
        <Markdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins}
                  urlTransform={props.urlTransform}>{props.content}</Markdown>
    )
}