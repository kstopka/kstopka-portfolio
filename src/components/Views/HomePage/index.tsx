import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

// import { ImageHomeMock } from "../../../mocks/HomePage/Home/ImageHome.mocks";
// import { TitlesHomeMock } from "../../../mocks/HomePage/Home/Titles.mocks";

import styles from "./rwd.module.scss";
import { About, Contact, Hobby, Home, Projects } from "../../HomePage";
import { HomeMock } from "../../../mocks/HomePage/Home/Titles.mocks";

const { homePage } = styles;

const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className={homePage}>
            <Home {...HomeMock} />
            <About />
            <Hobby />
            <Projects />
            <Contact />
        </div>
    );
};

export default HomePage;
