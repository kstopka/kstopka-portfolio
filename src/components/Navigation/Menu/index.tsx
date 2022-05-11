import * as React from "react";
import { FunctionComponent } from "react";
import { MenuProps } from "./types.d";

import styles from "./rwd.module.scss";
import { useActiveClass } from "../../hooks";
import MenuLiItem from "../MenuItem";

const { menu, menuActive, menuList } = styles;

const Menu: FunctionComponent<MenuProps> = ({ isOpen }) => {
    const { activeClass } = useActiveClass(isOpen, menuActive, menu);

    return (
        <div className={activeClass}>
            <ul className={menuList}>
                <MenuLiItem to="/" name="Home" />
                <MenuLiItem to="/" name="About" />
                <MenuLiItem to="/" name="Contact" />
            </ul>
        </div>
    );
};

export default Menu;
