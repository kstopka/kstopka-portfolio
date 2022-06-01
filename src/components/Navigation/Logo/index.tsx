import * as React from "react";
import { FunctionComponent } from "react";
import { HashLink } from "react-router-hash-link";

import { LogoProps } from "./types.d";
import styles from "./rwd.module.scss";
import { FootPrint } from "../../shared/icons/FootLogo";

const { wrapperLogo, wrapperLogoImage } = styles;

export const Logo: FunctionComponent<LogoProps> = ({ handleHamburger }) => {
    return (
        <div className={wrapperLogo}>
            <HashLink to="/#home" onClick={() => handleHamburger(false)}>
                <div className={wrapperLogoImage}>
                    <FootPrint />
                </div>
            </HashLink>
        </div>
    );
};
