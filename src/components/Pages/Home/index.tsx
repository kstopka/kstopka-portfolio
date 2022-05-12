import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

import styles from "./rwd.module.scss";

const { homePage } = styles;

const HomePage: FunctionComponent<HomePageProps> = () => {
    return <div className={homePage}>HomePage</div>;
};

export default HomePage;
