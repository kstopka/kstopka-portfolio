import * as React from "react";
import { FunctionComponent } from "react";
import { HashLink } from "react-router-hash-link";

import Footprint from "../../../images/footprint-304372_640.svg";

import { LogoProps } from "./types.d";
import styles from "./rwd.module.scss";

const { logo } = styles;

const Logo: FunctionComponent<LogoProps> = ({ handleHamburger }) => {
    return (
        <div className={logo}>
            <HashLink to="/#home" onClick={() => handleHamburger(false)}>
                <img src={Footprint} alt="Footprint" />
            </HashLink>
        </div>
    );
};

export default Logo;
