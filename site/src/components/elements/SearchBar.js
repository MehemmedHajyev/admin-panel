import React from "react";
import {useNavigate} from "react-router-dom";
import {Input, InputGroup, InputGroupText} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/css/SearchBar.css";

const SearchBar = ({isBackgroundwhite}) => {
    let navigate = useNavigate();

    const mtClass = isBackgroundwhite ? "mt-negative" : "mt-1";

    return (
        <div className={`wrapper ${mtClass}`}>
            <Dropdown>
                <Dropdown.Toggle className="dropdown-toggle" variant="success" id="dropdown-basic">
                    Resources
                    <FontAwesomeIcon className="ms-3" icon={faChevronDown} />
                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item href="#/action-1">
                            <label className="container">
                                Only domain
                                <input className="checkbox" type="checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                            </label>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            <label className="container">
                                Other options
                                <input className="checkbox" type="checkbox" defaultChecked="checked" />
                                <span className="checkmark" />
                            </label>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Toggle>
            </Dropdown>

            <InputGroup>
                <Input className="input-style" placeholder="Search anything..."></Input>
                <InputGroupText className="input-text-style">
                    <FontAwesomeIcon onClick={() => navigate("/results")} className="pe-2" icon={faSearch} />
                </InputGroupText>
            </InputGroup>
        </div>
    );
};

export default SearchBar;
