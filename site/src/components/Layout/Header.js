import {useLocation, NavLink} from "react-router-dom";
import {useState} from "react";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Select } from 'antd';

import { useTranslation } from 'react-i18next'

import "../../assets/css/Header.css";


const {Option} = Select

const Header = () => {
    const { t , i18n } = useTranslation();

    let locale = localStorage.getItem('locale')

    function changeLanguage(e) {
        i18n.changeLanguage(e);
        localStorage.setItem('locale', e)
    }
    

    let location = useLocation();
    let {pathname} = location;
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className={`p-4 ${pathname === "/" ? "bg-white" : "header-style"} navnav`}>
            <div className="d-flex align-items-center">
                <NavLink className={"nav-link domainfin me-3 flex-grow-1"} to="/">
                    DOMAINFINDER
                </NavLink>
                <div className="d-flex align-items-center">
                    <div className="d-none d-md-flex">
                        <NavLink className={"nav-link me-3"} to="/about">
                        { t('aboutUs') }
                        </NavLink>  
                        <span className="me-3">{ t('forDevelopers') }</span>
                    </div>

                    <button
                        className={`d-md-none btn btn-link togglenav ${
                            showMobileMenu ? "bg-dark text-light" : "bg-light text-dark"
                        }`}
                        onClick={toggleMobileMenu}
                        aria-expanded={showMobileMenu ? "true" : "false"}
                        aria-label="Toggle navigation"
                    >
                        <FontAwesomeIcon icon={showMobileMenu ? faTimes : faBars} />
                    </button>

                    <div>
                        <Select
                            style={{width:'200px'}}
                            defaultValue={locale ? locale : i18n.language}
                            onChange={(e)=>{
                              changeLanguage(e)
                            }}>
                                {i18n.languages.map((lang)=>(
                                    <Option value={lang}>
                                        {t(lang)}
                                    </Option>
                                ))}
                        </Select>
                    </div>
                </div>
            </div>
            {showMobileMenu && (
                <div className="d-md-none mt-3 burgermenumobile">
                    <span className="mb-2 d-block">Main</span>
                    <NavLink className={"nav-link d-block mb-2"} to="/about">
                    { t('aboutUs') }
                    </NavLink>
                    <span className="mb-2 d-block">{t('forDevelopers')}s</span>
                    <span className="mb-2 d-block">Terms of Service</span>
                    <span className="mb-2 d-block">Privacy Policy</span>
                    <span className="mb-2 d-block">Trust & Safety</span>
                </div>
            )}
        </div>
    );
};

export default Header;
