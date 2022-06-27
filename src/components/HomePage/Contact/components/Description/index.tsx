import * as React from "react";
import { FunctionComponent } from "react";

import styles from "./rwd.module.scss";
import { DescriptionProps } from "./types";
const { description, descriptionEmail } = styles;

export const Description: FunctionComponent<DescriptionProps> = ({ text, email }) => {
    return (
        <p className={description}>
            {text} <span className={descriptionEmail}>{email}</span>
        </p>
    );
};
