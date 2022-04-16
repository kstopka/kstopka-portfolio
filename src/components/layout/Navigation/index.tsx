import * as React from "react";
import { FunctionComponent } from "react";

import "./navigation.css";

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
    return (
        <div>
            <div className="nav">
                <div className="nav__container">
                    <div className="nav__container__logo">Navigation</div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
