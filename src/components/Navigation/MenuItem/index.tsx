import * as React from "react";
import { FunctionComponent } from "react";
import { HashLink } from "react-router-hash-link";
import { MenuLiItemProps } from "./types.d";
import { addActiveClassOnLoad } from "../Menu/utils";
import styles from "./rwd.module.scss";
import "./base.scss";

const { menuLiItem, menuLiItemActive } = styles;

export const MenuLiItem: FunctionComponent<MenuLiItemProps> = ({ link, onChangeHandler }) => {
    const { to, name, value } = link;
    return (
        <li onClick={onChangeHandler} className={`${menuLiItem} ${addActiveClassOnLoad(value, "Home")}`}>
            <HashLink to={to}>
                <span>{name}</span>
            </HashLink>
        </li>
    );
};
