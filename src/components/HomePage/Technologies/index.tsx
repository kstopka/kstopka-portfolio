import * as React from "react";
import { FunctionComponent } from "react";
import { TechnologiesProps } from "./types.d";

import styles from "./rwd.module.scss";
import { CarouselTechnologies, TitlesContentTechnologies } from "./components";

const { wrapperTechnologies, wrapperTechnologiesTitles, wrapperTechnologiesCarousel } = styles;

export const Technologies: FunctionComponent<TechnologiesProps> = ({ titlesContent, logos }) => {
    return (
        <div className={wrapperTechnologies}>
            <div className={wrapperTechnologiesTitles}>
                <TitlesContentTechnologies {...titlesContent} />
            </div>
            <div className={wrapperTechnologiesCarousel}>
                <CarouselTechnologies {...logos} />
            </div>
        </div>
    );
};
