import * as React from "react";
import { FunctionComponent } from "react";
import { AboutProps } from "./types.d";

import styles from "./rwd.module.scss";

const { about } = styles;

const About: FunctionComponent<AboutProps> = () => {
    return <div className={about}>About</div>;
};

export default About;
