import * as React from "react";
import { FunctionComponent } from "react";
import { NavigationProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Logo, Hamburger, Menu } from "../../Navigation";
import { useHamburger } from "./hooks";
import { ILink } from "../../Navigation/MenuItem/types.d";

const { nav } = styles;

const links: ILink[] = [
    { to: "/#home", name: "Home", value: "Home" },
    { to: "/hobby", name: "Hobby", value: "Hobby" },
    { to: "/#contact", name: "Contact", value: "Contact" },
];

const Navigation: FunctionComponent<NavigationProps> = () => {
    const { isOpen, handleHamburger } = useHamburger();
    return (
        <div className={nav}>
            <Logo {...{ handleHamburger }} />
            <Menu {...{ isOpen, links, handleHamburger }} />
            <Hamburger {...{ isOpen, handleHamburger }} />
        </div>
    );
};

export default Navigation;
