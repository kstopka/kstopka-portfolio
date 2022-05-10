import * as React from "react";
import { FunctionComponent } from "react";
import { HamburgerProps } from "./types.d";
import styles from "./rwd.module.scss";
import { useActiveClassHamburger } from "./hooks";

const { hamburger, hamburgerIcon, hamburgerIconOpen } = styles;

const Hamburger: FunctionComponent<HamburgerProps> = ({ isOpen, handleHamburger }) => {
    const { activeClass } = useActiveClassHamburger(isOpen, hamburgerIcon, hamburgerIconOpen);

    return (
        <div className={hamburger} onClick={handleHamburger}>
            <div className={activeClass}></div>
        </div>
    );
};

export default Hamburger;
