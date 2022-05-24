import * as React from "react";
import { FunctionComponent } from "react";
import { DescriptionHomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperDescription } = styles;

export const DescriptionHome: FunctionComponent<DescriptionHomeProps> = ({ description }) => {
    return <p className={wrapperDescription}>{description}</p>;
};
