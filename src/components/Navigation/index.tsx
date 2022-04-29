import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import Footprint from "../../images/footprint-304372_640.svg";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { useHamburger } from "./hoooks";

const { nav, navLogo, navHamburger, navHamburgerIcon, navHamburgerIconOpen } = styles;

const Navigation: FunctionComponent<NavigationProps> = () => {
    const { handleHamburger, activeClass } = useHamburger(navHamburgerIcon, navHamburgerIconOpen);
    return (
        <div>
            {/* <div className="nav">
                <div className="nav__container">
                    <ul className="nav__container__links">
                        <li>
                            <div className="nav__container__link">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="nav__container__link">
                                <Link to="/">
                                    <span>Contact</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
            <div className={nav}>
                <div className={navLogo}>
                    <Link to="/">
                        <img src={Footprint} alt="Footprint" />
                    </Link>
                </div>
                <div className={navHamburger} onClick={handleHamburger}>
                    <div className={activeClass}></div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
