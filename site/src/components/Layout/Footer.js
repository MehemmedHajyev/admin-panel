import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../assets/css/Footer.css";
import {faTwitter, faFacebookF, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

const Footer = ({direction, props}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div>
            <hr />
            <footer className="mt-5 mb-5">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="icons-of-footer footer-col">
                            <FontAwesomeIcon className="icon-brand twitter" icon={faTwitter} />
                            <FontAwesomeIcon className="icon-brand facebook" icon={faFacebookF} />
                            <FontAwesomeIcon className="icon-brand linkedin" icon={faLinkedinIn} />
                        </div>
                        <div className="menu-of-footer footer-col">
                            <nav>
                                <ul className="d-flex footer-navbar">
                                    <li>
                                        <a href="/">Terms of Service</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Trust & Safety</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="dropdown-of-footer footer-col">
                            <h6>Language:</h6>
                            <Dropdown className="ms-3" isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                                <DropdownToggle className="footer-dropdown" caret>
                                    EN
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem className="dropdown-item-style">RU</DropdownItem>
                                    <DropdownItem className="dropdown-item-style">AZ</DropdownItem>
                                    <DropdownItem className="dropdown-item-style">EN</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
