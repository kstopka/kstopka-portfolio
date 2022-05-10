import * as React from "react";
import { FunctionComponent } from "react";
import { ExampleProps } from "./types.d";

import styles from "./rwd.module.scss";

const { exmaple } = styles;

const Example: FunctionComponent<ExampleProps> = () => {
    return <div className={exmaple}></div>;
};

export default Example;
