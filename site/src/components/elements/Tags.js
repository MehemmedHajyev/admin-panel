import "../../assets/css/main.css";
const Tags = (props) => {
    let {items, title} = props;

    return (
        <div className="container">
            <div className="card card-body mt-4">
                <div className="card-title titlecard">{title}</div>
                <div className="row">
                    {items.map((tag, index) => {
                        return (
                            <div key={index} className="col-4 tags">
                                {tag}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tags;
