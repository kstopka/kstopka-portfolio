import * as React from "react";
import { FunctionComponent } from "react";
import { HobbyProps } from "./types.d";

import styles from "./rwd.module.scss";
import { CarouselHobby, TitlesContentHobby } from "./components";

const { wrapperHobby, wrapperHobbyTitles, wrapperHobbyCarousel } = styles;
const testArray = {
    cards: [
        {
            title: "test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 test 1 ",
        },
        { title: "test 2" },
        { title: "test 3" },
    ],
};

export const Hobby: FunctionComponent<HobbyProps> = ({ titlesContent, cards }) => {
    return (
        <div className={wrapperHobby} id="hobby">
            <div className={wrapperHobbyTitles}>
                <TitlesContentHobby {...titlesContent} />
            </div>
            <div className={wrapperHobbyCarousel}>
                <CarouselHobby {...cards} />
            </div>
        </div>
    );
};
