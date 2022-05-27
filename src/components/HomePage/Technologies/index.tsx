import * as React from "react";
import { FunctionComponent } from "react";
import { TechnologiesProps } from "./types.d";

import styles from "./rwd.module.scss";
import { TitlesContentTechnologies } from "./components/TitlesContent";

const { wrapperTechnologies, wrapperTechnologiesTitles } = styles;

export const Technologies: FunctionComponent<TechnologiesProps> = () => {
    return (
        <div className={wrapperTechnologies}>
            <div className={wrapperTechnologiesTitles}>{/* <TitlesContentTechnologies {...titlesContent} /> */}</div>
        </div>
    );
};
