import * as React from "react";
import { FunctionComponent } from "react";
import { ProjectsProps } from "./types.d";

import styles from "./rwd.module.scss";

const { projects } = styles;

export const Projects: FunctionComponent<ProjectsProps> = () => {
    return <div className={projects}>Projects</div>;
};
