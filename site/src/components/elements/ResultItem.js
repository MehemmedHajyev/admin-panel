import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const ResultItem = (props) => {
    let {name, title, description, url, tags, id} = props;

    return (
        <Link to={`/results/${id}`}>
            <Card className="mb-4" title={title} bordered={true}>
                <div> {name} </div>
                <div> {description} </div>
                <a target={"_blank"} href={url}>
                    {" "}
                    {url}{" "}
                </a>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </Card>
        </Link>
    );
};

export default ResultItem;
