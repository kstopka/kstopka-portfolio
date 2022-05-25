import * as React from "react";
import { FunctionComponent } from "react";
import { TitlesContentHomeProps } from "./types.d";

import styles from "./rwd.module.scss";
import { AuthorHome, TitleHome, DescriptionHome } from "..";

const { wrapperTitles, wrapperTitlesTitle, wrapperTitlesAuthor, wrapperTitlesDescription } = styles;

export const TitlesContentHome: FunctionComponent<TitlesContentHomeProps> = ({ title, author, description }) => {
    return (
        <div className={wrapperTitles}>
            <div className={wrapperTitlesTitle}>
                <TitleHome {...title} />
            </div>
            <div className={wrapperTitlesAuthor}>
                <AuthorHome {...author} />
            </div>
            <div className={wrapperTitlesDescription}>
                <DescriptionHome {...description} />
            </div>
        </div>
    );
};
