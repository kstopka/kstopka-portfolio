import * as React from "react";
import { FunctionComponent } from "react";
import { MenuProps } from "./types.d";

import styles from "./rwd.module.scss";
import { useActiveClass } from "../hooks";

const { menu, menuActive, menuList, menuListActive, menuListItem } = styles;

const Menu: FunctionComponent<MenuProps> = ({ isOpen }) => {
    const { activeClass: menuActiveClass } = useActiveClass(isOpen, menuActive, menu);
    const { activeClass: menuListActiveClass } = useActiveClass(isOpen, menuListActive, menuList);

    return (
        <div className={menuActiveClass}>
            <ul className={menuListActiveClass}>
                <li className={menuListItem}>Home</li>
                <li className={menuListItem}>About</li>
            </ul>
        </div>
    );
};

export default Menu;
