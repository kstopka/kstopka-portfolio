import * as React from "react";
import { FunctionComponent } from "react";
import { CardHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperCard, wrapperCardImage, wrapperCardTitle, wrapperCardFooter } = styles;

export const CardHobby: FunctionComponent<CardHobbyProps> = ({ title }) => {
    return (
        <div className={wrapperCard}>
            <div className={wrapperCardImage}>
                <img src="" alt="" />
            </div>
            <div className={wrapperCardTitle}>
                <p>{title}</p>
            </div>
            <div className={wrapperCardFooter}>Footer</div>
        </div>
    );
};
