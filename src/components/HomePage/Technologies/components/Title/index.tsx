import * as React from "react";
import { FunctionComponent } from "react";
import { TitleTechnologiesProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperTitle } = styles;

export const TitleTechnologies: FunctionComponent<TitleTechnologiesProps> = ({ title }) => {
    return <h2 className={wrapperTitle}>{title}</h2>;
};
