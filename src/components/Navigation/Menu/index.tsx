import * as React from "react";
import { FunctionComponent } from "react";
import { MenuProps } from "./types.d";
import styles from "./rwd.module.scss";
import { useActiveClass } from "../../hooks";
import { useMenuLiItem } from "./hooks";
import { MenuLiItem } from "../MenuItem";

const { wrapperMenu, wrapperMenuActive, wrapperMenuList } = styles;

export const Menu: FunctionComponent<MenuProps> = ({ isOpen, links, handleHamburger }) => {
    const { activeClass } = useActiveClass(isOpen, wrapperMenuActive, wrapperMenu);
    const { ref, onChangeHandler } = useMenuLiItem(handleHamburger);

    return (
        <div className={activeClass}>
            <ul ref={ref} className={wrapperMenuList}>
                {links.map((link) => {
                    return <MenuLiItem onChangeHandler={onChangeHandler} link={link} key={link.name} />;
                })}
            </ul>
        </div>
    );
};
