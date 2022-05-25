import * as React from "react";
import { FunctionComponent } from "react";
import { TitleHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperTitle } = styles;

export const TitleHobby: FunctionComponent<TitleHobbyProps> = ({ title }) => {
    return <h2 className={wrapperTitle}>{title}</h2>;
};
