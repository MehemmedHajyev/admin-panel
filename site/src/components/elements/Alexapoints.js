import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/main.css";

const Alexa = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="container">
                <div className="company-side-menu-style mt-3">
                    <div className="company-menu-header" onClick={toggleMenu}>
                        <h6>Alexa points</h6>
                        <FontAwesomeIcon className="chevron-up" icon={faChevronUp} />
                    </div>
                    {menuOpen && (
                        <div className="company-menu-options mt-3">
                            <div>
                                {" "}
                                <form className="checkbox-wrapper mt-3">
                                    <label>
                                        <input type="checkbox" checked />5 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />4 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />3 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />2 star
                                    </label>
                                    <label>
                                        <input type="checkbox" />5 star
                                    </label>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alexa;
