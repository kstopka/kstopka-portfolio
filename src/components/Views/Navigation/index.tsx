import * as React from "react";
import { FunctionComponent } from "react";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Logo, Hamburger, Menu } from "../../Navigation";
import { useHamburger } from "./hooks";
import { ILink } from "../../Navigation/MenuItem/types.d";

const { wrapperNav, wrapperNavLogo, wrapperNavMenu, wrapperNavHamburger } = styles;

const links: ILink[] = [
    { to: "/#home", name: "Home", value: "Home" },
    { to: "/#hobby", name: "Hobby", value: "Hobby" },
    { to: "/#contact", name: "Contact", value: "Contact" },
];

export const Navigation: FunctionComponent<NavigationProps> = () => {
    const { isOpen, handleHamburger } = useHamburger();
    return (
        <div className={wrapperNav}>
            {/* <div className={wrapperNavLogo}> */}
            <Logo {...{ handleHamburger }} />
            {/* </div> */}
            {/* <div className={wrapperNavMenu}> */}
            <Menu {...{ isOpen, links, handleHamburger }} />
            {/* </div> */}
            {/* <div className={wrapperNavHamburger}> */}
            <Hamburger {...{ isOpen, handleHamburger }} />
            {/* </div> */}
        </div>
    );
};
