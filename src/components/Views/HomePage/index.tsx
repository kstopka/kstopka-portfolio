import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

import styles from "./rwd.module.scss";
import { About, Contact, Hobby, Home, Projects, Technologies } from "../../HomePage";
import { HobbyMock, HomeMock } from "../../../mocks/HomePage";

const { homePage } = styles;

export const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className={homePage}>
            {/* <Home {...HomeMock} /> */}
            {/* <About /> */}
            {/* <Hobby {...HobbyMock} /> */}
            {/* <Projects /> */}
            <Technologies />
            {/* <Contact /> */}
        </div>
    );
};
