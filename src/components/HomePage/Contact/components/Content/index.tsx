import * as React from "react";
import { FunctionComponent } from "react";
import { ContactUsForm } from "../Form";
import { TitleSection } from "../TitleSection";

import styles from "./rwd.module.scss";
import { ContentProps } from "./types";
const { wrapper, wrapperTitleSection, wrapperForm } = styles;

export const Content: FunctionComponent<ContentProps> = ({ titles, formOptions }) => {
    return (
        <div className={wrapper}>
            <div className={wrapperTitleSection}>
                <TitleSection {...titles} />
            </div>
            <div className={wrapperForm}>
                <ContactUsForm {...formOptions} />
            </div>
        </div>
    );
};
