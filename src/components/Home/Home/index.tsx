import * as React from "react";
import { FunctionComponent } from "react";
import { HomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { home } = styles;

const Home: FunctionComponent<HomeProps> = () => {
    return <div className={home}>Home</div>;
};

export default Home;
