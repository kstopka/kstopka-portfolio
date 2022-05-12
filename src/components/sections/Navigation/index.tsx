import * as React from "react";
import { FunctionComponent } from "react";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Logo, Hamburger, Menu } from "../../Navigation";
import { useHamburger } from "./hooks";
import { ILink } from "../../Navigation/MenuItem/types.d";

const { nav } = styles;

const links: ILink[] = [
    { to: "/", name: "Home", value: "Home" },
    { to: "/", name: "About", value: "About" },
    { to: "/", name: "Contact", value: "Contact" },
];

const Navigation: FunctionComponent<NavigationProps> = () => {
    const { isOpen, handleHamburger } = useHamburger();
    return (
        <div>
            <div className={nav}>
                <Logo />
                <Menu {...{ isOpen, links }} />
                <Hamburger {...{ isOpen, handleHamburger }} />
            </div>
        </div>
    );
};

export default Navigation;
