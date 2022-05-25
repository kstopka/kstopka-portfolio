import * as React from "react";
import { FunctionComponent } from "react";
import { HobbyProps } from "./types.d";

import styles from "./rwd.module.scss";
import { TitlesContentHobby } from "./components";

const { wrapperHobby, wrapperHobbyTitles } = styles;

const Hobby: FunctionComponent<HobbyProps> = ({ titlesContent }) => {
    return (
        <div className={wrapperHobby}>
            <div className={wrapperHobbyTitles}>
                <TitlesContentHobby {...titlesContent} />
            </div>
        </div>
    );
};

export default Hobby;
