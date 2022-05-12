import * as React from "react";
import { FunctionComponent } from "react";
import { AboutPageProps } from "./types.d";

import styles from "./rwd.module.scss";

const { aboutPage } = styles;

const AboutPage: FunctionComponent<AboutPageProps> = () => {
    return <div className={aboutPage}>AboutPage</div>;
};

export default AboutPage;
