import * as React from "react";
import { FunctionComponent } from "react";
import { TitlesContentHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";
import { SubtitleHobby, TitleHobby } from "..";

const { wrapperTitles, wrapperTitlesTitle, wrapperTitlesSubtitle } = styles;

export const TitlesContentHobby: FunctionComponent<TitlesContentHobbyProps> = ({ title, subtitle }) => {
    return (
        <div className={wrapperTitles}>
            <div className={wrapperTitlesTitle}>
                <TitleHobby {...title} />
            </div>
            <div className={wrapperTitlesSubtitle}>
                <SubtitleHobby {...subtitle} />
            </div>
        </div>
    );
};
