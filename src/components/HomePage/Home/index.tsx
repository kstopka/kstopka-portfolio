import * as React from "react";
import { FunctionComponent } from "react";
import { HomeProps } from "./types.d";

import styles from "./rwd.module.scss";

import { ImageHome, TitlesContentHome } from "./components";

const { wrapperHome, wrapperHomeImage, wrapperHomeTitles } = styles;

const Home: FunctionComponent<HomeProps> = ({ image, titlesContent }) => {
    return (
        <div className={wrapperHome} id="home">
            <div className={wrapperHomeImage}>
                <ImageHome {...image} />
            </div>
            <div className={wrapperHomeTitles}>
                <TitlesContentHome {...titlesContent} />
            </div>
        </div>
    );
};

export default Home;
