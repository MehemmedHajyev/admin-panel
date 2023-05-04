import React, {useState , useEffect} from "react";
import { connect } from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {InputGroup} from "reactstrap";
import "../../assets/css/main.css";
import { getCategory , filterProducts , getProduct} from "../../redux/actions";

const CompanyFiltered = (props) => {

    const {getCategory , categories  , filterProducts , getProduct} =  props

    useEffect(()=>{
        getCategory()
    } , [])



    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="container">
                <div className="company-side-menu-style mt-3">
                    <div className="company-menu-header" onClick={toggleMenu}>
                        <h6>Company Sectors</h6>
                        <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                    </div>
                    <div className="w-100">
                        <button onClick={()=>{
                            getProduct()
                        }} className="btn w-75 btn-light">Clear Filter</button>
                    </div>
                    {menuOpen && (
                        <div className="company-menu-options mt-3">
                            <div>
                                {" "}
                                <InputGroup className="company-input-group mt-3">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback" />
                                        <input type="text" className="form-control" placeholder="Search sector" />
                                    </div>
                                </InputGroup>
                            </div>
                            <div>
                                {" "}
                                <form className="checkbox-wrapper mt-3">
                                    {
                                        categories.map((category , index)=>(
                                            <label key={index}>
                                                <input 
                                                onChange={(e)=>{
                                                    console.log(e)
                                                    if(e.target.checked){
                                                        filterProducts(category)
                                                    }
                                                    else{
                                                        getProduct()
                                                    }
                                                }}
                                                type="checkbox" />
                                                {category}
                                            </label>
                                        ))
                                    }
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    categories: state.categories
})


export default connect(mapStateToProps  , { getCategory  , filterProducts , getProduct})(CompanyFiltered)
