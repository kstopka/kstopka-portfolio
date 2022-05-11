import * as React from "react";
import { FunctionComponent } from "react";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Logo, Hamburger, Menu } from "../../Navigation";
import { useHamburger } from "./hooks";

const { nav } = styles;

const Navigation: FunctionComponent<NavigationProps> = () => {
    const { isOpen, handleHamburger } = useHamburger();
    return (
        <div>
            <div className={nav}>
                <Logo />
                <Menu {...{ isOpen }} />
                <Hamburger {...{ isOpen, handleHamburger }} />
            </div>
        </div>
    );
};

export default Navigation;
