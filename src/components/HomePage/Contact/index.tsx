import * as React from "react";
import { FunctionComponent } from "react";
import { ContactProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Content } from "./components/Content";

const { contact, backgroundImage, wrapperContent } = styles;

export const Contact: FunctionComponent<ContactProps> = ({ content }) => {
    return (
        <div className={contact} id="contact">
            <div className={backgroundImage}>
                <div className={wrapperContent}>
                    <Content {...content} />
                </div>
            </div>
        </div>
    );
};
