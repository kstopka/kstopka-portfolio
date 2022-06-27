import * as React from "react";
import { FunctionComponent } from "react";
import { HomePageProps } from "./types.d";

import styles from "./rwd.module.scss";
import { About, Contact, Hobby, Home, Projects, Technologies } from "../../HomePage";
import { HobbyMock, HomeMock, TechnologiesMock, ContactMock } from "../../../mocks/HomePage";

const { wrapperHomePage } = styles;

export const HomePage: FunctionComponent<HomePageProps> = () => {
    return (
        <div className={wrapperHomePage}>
            {/* <Home {...HomeMock} />
            <About />
            <Hobby {...HobbyMock} />
            <Projects />
            <Technologies {...TechnologiesMock} /> */}
            <Contact {...ContactMock} />
        </div>
    );
};
