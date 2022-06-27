import * as React from "react";
import { FunctionComponent } from "react";
import { ContactProps } from "./types.d";

import styles from "./rwd.module.scss";
import { Content } from "./components/Content";

const { wrapperContact, wrapperContactBackground, wrapperContactContent } = styles;

export const Contact: FunctionComponent<ContactProps> = ({ content }) => {
    return (
        <div className={wrapperContact} id="contact">
            <div className={wrapperContactBackground}>
                <div className={wrapperContactContent}>
                    <Content {...content} />
                </div>
            </div>
        </div>
    );
};
