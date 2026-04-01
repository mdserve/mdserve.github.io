import Version from "./version";

interface FooterProps {
    user?: string;
    source: string;
}

export default function Footer(props: FooterProps) {
    return (
        <div className="footer">
            {props.user &&
                <>
                <span><a href={props.source}>Source</a> by <a
                    href={`https://github.com/${props.user}`}>{props.user}</a></span>
                    <span>|</span>
                </>
            }
            <span>Served by <a href="https://mdserve.github.io">MDServe</a>&nbsp;release&nbsp;
                <a href="https://github.com/mdserve/mdserve.github.io">
                {Version.gitSha.substring(0, 7)}
                </a>
            </span>
        </div>
    );
}