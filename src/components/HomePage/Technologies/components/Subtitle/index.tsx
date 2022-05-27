import * as React from "react";
import { FunctionComponent } from "react";
import { SubtitleTechnologiesProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperSubtitle } = styles;

export const SubtitleTechnologies: FunctionComponent<SubtitleTechnologiesProps> = ({ subtitle }) => {
    return <h3 className={wrapperSubtitle}>{subtitle}</h3>;
};
