import * as React from "react";
import { FunctionComponent } from "react";
import { ImageHomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperImage } = styles;

export const ImageHome: FunctionComponent<ImageHomeProps> = ({ src, alt }) => {
    return (
        <div className={wrapperImage}>
            <img src={src} alt={alt} />
        </div>
    );
};
