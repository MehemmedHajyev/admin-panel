import Companyfiltered from "./companyfiltered";
import Country from "./Country";
import Metatags from "./Metatag";
import Alexa from "./Alexapoints";
import Colors from "./Colorsector";
import "../../assets/css/main.css";
const Filter = () => {
    return (
        <div>
            <div className="filter-base container">
                <h6>FILTERS</h6>
            </div>
            <Companyfiltered />
            <Country />
            <Metatags />
            <Alexa />
            <Colors />
        </div>
    );
};

export default Filter;
