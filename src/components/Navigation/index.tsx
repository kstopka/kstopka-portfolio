import * as React from "react";
import { FunctionComponent } from "react";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Logo, Hamburger } from "..";

const { nav } = styles;

const Navigation: FunctionComponent<NavigationProps> = () => {
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
                <Logo />
                <Hamburger />
            </div>
        </div>
    );
};

export default Navigation;
