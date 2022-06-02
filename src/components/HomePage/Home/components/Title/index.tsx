import * as React from "react";
import { FunctionComponent } from "react";
import { TitleHomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperTitle } = styles;

export const TitleHome: FunctionComponent<TitleHomeProps> = ({ title }) => {
    return <h3 className={wrapperTitle}>{title}</h3>;
};
