import * as React from "react";
import { FunctionComponent } from "react";
import { CardHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const {
    wrapperCard,
    wrapperCardImage,
    wrapperCardInformation,
    wrapperCardInformationTitle,
    wrapperCardInformationFooter,
} = styles;

export const CardHobby: FunctionComponent<CardHobbyProps> = ({ title }) => {
    return (
        <div className={wrapperCard}>
            <div className={wrapperCardImage}>{/* <img src="" alt="" /> */}</div>
            <div className={wrapperCardInformation}>
                <div className={wrapperCardInformationTitle}>
                    <p>{title}</p>
                </div>
                <div className={wrapperCardInformationFooter}>Footer</div>
            </div>
        </div>
    );
};
