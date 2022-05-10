import * as React from "react";
import { FunctionComponent } from "react";
import { MenuProps } from "./types.d";

import styles from "./rwd.module.scss";

const { menu, menuList, menuListItem } = styles;

const Menu: FunctionComponent<MenuProps> = ({ isOpen }) => {
    // if (!isOpen) return;
    return (
        <div className={menu}>
            <ul className={menuList}>
                <li className={menuListItem}>Home</li>
                <li className={menuListItem}>About</li>
            </ul>
        </div>
    );
};

export default Menu;
