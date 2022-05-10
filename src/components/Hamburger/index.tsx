import * as React from "react";
import { FunctionComponent } from "react";
import { HamburgerProps } from "./types.d";

import styles from "./rwd.module.scss";
import { useHamburger } from "../Navigation/hoooks";

const { hamburger, hamburgerIcon, hamburgerIconOpen } = styles;

const Hamburger: FunctionComponent<HamburgerProps> = () => {
    const { handleHamburger, addHamburgerClass } = useHamburger(hamburgerIcon, hamburgerIconOpen);

    return (
        <div className={hamburger} onClick={handleHamburger}>
            <div className={addHamburgerClass}></div>
        </div>
    );
};

export default Hamburger;
