import * as React from "react";
import { FunctionComponent } from "react";
import { HobbyProps } from "./types.d";

import styles from "./rwd.module.scss";

const { hobby } = styles;

const Hobby: FunctionComponent<HobbyProps> = () => {
    return <div className={hobby}>Hobby</div>;
};

export default Hobby;
