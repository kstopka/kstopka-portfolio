import * as React from "react";
import { FunctionComponent } from "react";
import { TitlesHomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperTitles, wrapperTitlesTitle, wrapperTitlesAuthor, wrapperTitlesDescription } = styles;

export const TitlesHome: FunctionComponent<TitlesHomeProps> = ({ title, author, description }) => {
    return (
        <div className={wrapperTitles}>
            <h2 className={wrapperTitlesTitle}>{title}</h2>
            <h1 className={wrapperTitlesAuthor}>{author}</h1>
            <p className={wrapperTitlesDescription}>{description}</p>
        </div>
    );
};
