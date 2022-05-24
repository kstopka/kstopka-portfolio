import * as React from "react";
import { FunctionComponent } from "react";
import { HomeProps } from "./types.d";

import styles from "./rwd.module.scss";

import { ImageHome, TitlesHome } from "./components";
import { ImageHomeMock } from "../../../mocks/HomePage/Home/ImageHome.mocks";
import { TitlesHomeMock } from "../../../mocks/HomePage/Home/Titles.mocks";
const { wrapperHome, wrapperHomeImage, wrapperHomeTitles } = styles;

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className={wrapperHome} id="home">
            <div className={wrapperHomeImage}>
                <ImageHome {...ImageHomeMock} />
            </div>
            <div className={wrapperHomeTitles}>
                <TitlesHome {...TitlesHomeMock} />
            </div>
        </div>
    );
};

export default Home;
