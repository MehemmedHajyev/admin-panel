import Tags from "../elements/Tags";
import Detailadobe from "../elements/Detailadobe";
import DomainReg from "../elements/Domainreg";
import Whoisdomain from "../elements/Whoisdomain";
import SimilarAdobe from "../elements/Similaradobe";

const Details = () => {
    return (
        <div className="details">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Detailadobe />
                        <DomainReg />
                        <Whoisdomain />
                        <SimilarAdobe />
                    </div>
                    <div className="col-md-4 ">
                        <Tags
                            title="Tags"
                            items={["adobe", "design", "creative", "designer", "photoshop", "illustrator"]}
                        />
                        <Tags
                            title="Company sectors"
                            items={["Art", "Design", "Photography", "Development", "Artist"]}
                        />
                        <Tags title="Colors" items={["Red", "Black", "White", "Gray"]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
