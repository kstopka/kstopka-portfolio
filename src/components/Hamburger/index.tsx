import * as React from "react";
import { FunctionComponent } from "react";
import { HamburgerProps } from "./types.d";
import styles from "./rwd.module.scss";
import { useActiveClass } from "../hooks";

const { hamburger, hamburgerIcon, hamburgerIconActive } = styles;

const Hamburger: FunctionComponent<HamburgerProps> = ({ isOpen, handleHamburger }) => {
    const { activeClass } = useActiveClass(isOpen, hamburgerIconActive, hamburgerIcon);

    return (
        <div className={hamburger} onClick={handleHamburger}>
            <div className={activeClass}></div>
        </div>
    );
};

export default Hamburger;
