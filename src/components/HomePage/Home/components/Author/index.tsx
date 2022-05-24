import * as React from "react";
import { FunctionComponent } from "react";
import { AuthorHomeProps } from "./types.d";

import styles from "./rwd.module.scss";

const { wrapperAuthor } = styles;

export const AuthorHome: FunctionComponent<AuthorHomeProps> = ({ author }) => {
    return <h1 className={wrapperAuthor}>{author}</h1>;
};
