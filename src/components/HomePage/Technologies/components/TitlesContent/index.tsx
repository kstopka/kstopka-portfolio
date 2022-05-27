import * as React from "react";
import { FunctionComponent } from "react";
import { TitlesContentTechnologiesProps } from "./types.d";

import styles from "./rwd.module.scss";
import { TitleTechnologies, SubtitleTechnologies } from "..";

const { wrapperTitles, wrapperTitlesTitle, wrapperTitlesSubtitle } = styles;

export const TitlesContentTechnologies: FunctionComponent<TitlesContentTechnologiesProps> = ({ title, subtitle }) => {
    return (
        <div className={wrapperTitles}>
            <div className={wrapperTitlesTitle}>
                <TitleTechnologies {...title} />
            </div>
            <div className={wrapperTitlesSubtitle}>
                <SubtitleTechnologies {...subtitle} />
            </div>
        </div>
    );
};
