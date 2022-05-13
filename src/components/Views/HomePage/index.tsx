import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

import styles from "./rwd.module.scss";
import { About, Contact, Hobby, Home, Projects } from "../../HomePage";

const { homePage } = styles;

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className={homePage}>
            <Home />
            <About />
            <Hobby />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
