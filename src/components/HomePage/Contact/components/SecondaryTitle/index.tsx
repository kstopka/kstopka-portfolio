import * as React from "react";
import { FunctionComponent } from "react";

import styles from "./rwd.module.scss";
import { SecondaryTitleProps } from "./types";
const { secondaryTitle } = styles;

export const SecondaryTitle: FunctionComponent<SecondaryTitleProps> = ({ title }) => {
    return <h3 className={secondaryTitle}>{title}</h3>;
};
