import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

import styles from "./rwd.module.scss";
import { About, Contact, Hobby, Home, Projects } from "../../HomePage";
import { HobbyMock } from "../../../mocks/HomePage/Hobby/Hobby.mocks";
import { HomeMock } from "../../../mocks/HomePage/Home/Home.mocks";

const { homePage } = styles;

export const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className={homePage}>
            <Home {...HomeMock} />
            <About />
            <Hobby {...HobbyMock} />
            <Projects />
            <Contact />
        </div>
    );
};
