import * as React from "react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Footprint from "../../images/footprint-304372_640.svg";
import { LogoProps } from "./types.d";

import styles from "./rwd.module.scss";

const { logo } = styles;

const Logo: FunctionComponent<LogoProps> = () => {
    return (
        <div className={logo}>
            <Link to="/">
                <img src={Footprint} alt="Footprint" />
            </Link>
        </div>
    );
};

export default Logo;
