import * as React from "react";
import { FunctionComponent } from "react";
import { MenuLiItemProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Link } from "react-router-dom";
import { addActiveClassOnLoad } from "../Menu/utils";
import "./base.scss";

const { menuLiItem, menuLiItemActive } = styles;

const MenuLiItem: FunctionComponent<MenuLiItemProps> = ({ link, onChangeHandler }) => {
    const { to, name, value } = link;
    return (
        <li onClick={onChangeHandler} className={`${menuLiItem} ${addActiveClassOnLoad(value, "Home")}`}>
            <Link to={to}>
                <span>{name}</span>
            </Link>
        </li>
    );
};

export default MenuLiItem;
