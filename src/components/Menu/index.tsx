import * as React from "react";
import { FunctionComponent } from "react";
import { MenuProps } from "./types.d";

import styles from "./rwd.module.scss";
import { useActiveClass } from "../hooks";

const { menu, menuActive, menuList, menuListItem } = styles;

const Menu: FunctionComponent<MenuProps> = ({ isOpen }) => {
    const { activeClass } = useActiveClass(isOpen, menuActive, menu);

    return (
        <div className={activeClass}>
            <ul className={menuList}>
                <li className={menuListItem}>Home</li>
                <li className={menuListItem}>About</li>
            </ul>
        </div>
    );
};

export default Menu;
