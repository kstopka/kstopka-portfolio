import * as React from "react";
import { FunctionComponent } from "react";
import { CarouselHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperCarousel } = styles;

export const CarouselHobby: FunctionComponent<CarouselHobbyProps> = ({ hobbies }) => {
    return <div className={wrapperCarousel}>{hobbies}</div>;
};
