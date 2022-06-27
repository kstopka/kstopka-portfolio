import * as React from "react";
import { FunctionComponent } from "react";
import { PrimaryTitleProps } from "./types";

import styles from "./rwd.module.scss";

const { primaryTitle } = styles;

export const PrimaryTitle: FunctionComponent<PrimaryTitleProps> = ({ title }) => {
    return <h2 className={primaryTitle}>{title}</h2>;
};
