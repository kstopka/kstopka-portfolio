import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footprint from "../../standard/Home/images/footprint-304372_640.svg";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";

const { nav } = styles;

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <div>
            {/* <div className="nav">
                <div className="nav__container">
                    <div className="nav__container__logo">
                        <Link to="/">
                            <img src={Footprint} alt="Footprint" />
                        </Link>
                    </div>
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
            <div className={nav}></div>
        </div>
    );
};

export default Navigation;
