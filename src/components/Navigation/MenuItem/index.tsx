import * as React from "react";
import { FunctionComponent } from "react";
import { MenuLiItemProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Link } from "react-router-dom";

const { menuLiItem } = styles;

const MenuLiItem: FunctionComponent<MenuLiItemProps> = ({ to, name }) => {
    return (
        <li className={menuLiItem}>
            <Link to={to}>
                <span>{name}</span>
            </Link>
        </li>
    );
};

export default MenuLiItem;
