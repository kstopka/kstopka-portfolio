import * as React from "react";
import { FunctionComponent } from "react";
import { AboutProps } from "./types.d";

import styles from "./rwd.module.scss";

const { about } = styles;

export const About: FunctionComponent<AboutProps> = () => {
    return <div className={about}>About</div>;
};
