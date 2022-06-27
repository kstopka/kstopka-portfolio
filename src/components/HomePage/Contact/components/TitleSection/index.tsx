import * as React from "react";
import { FunctionComponent } from "react";

import { Description } from "../Description";
import { PrimaryTitle } from "../PrimaryTitle";
import { SecondaryTitle } from "../SecondaryTitle";
import { TitleSectionProps } from "./types";
import styles from "./rwd.module.scss";

const { wrapper, wrapperSecondaryTitle, wrapperPrimaryTitle, wrapperDescription } = styles;

export const TitleSection: FunctionComponent<TitleSectionProps> = ({ primaryTitle, secondaryTitle, descriptions }) => {
    return (
        <div className={wrapper}>
            <div className={wrapperSecondaryTitle}>
                <SecondaryTitle {...secondaryTitle} />
            </div>
            <div className={wrapperPrimaryTitle}>
                <PrimaryTitle {...primaryTitle} />
            </div>
            <div className={wrapperDescription}>
                <Description {...descriptions} />
            </div>
        </div>
    );
};
