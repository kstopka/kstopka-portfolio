import * as React from "react";
import { FunctionComponent } from "react";
import { ContactProps } from "./types.d";

import styles from "./rwd.module.scss";

const { contact } = styles;

export const Contact: FunctionComponent<ContactProps> = () => {
    return (
        <div className={contact} id="contact">
            Contact
        </div>
    );
};
