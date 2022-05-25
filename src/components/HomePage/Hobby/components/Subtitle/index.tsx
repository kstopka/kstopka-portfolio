import * as React from "react";
import { FunctionComponent } from "react";
import { SubtitleHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperSubtitle } = styles;

export const SubtitleHobby: FunctionComponent<SubtitleHobbyProps> = ({ subtitle }) => {
    return <h3 className={wrapperSubtitle}>{subtitle}</h3>;
};
