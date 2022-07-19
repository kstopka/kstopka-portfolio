import * as React from "react";
import { FunctionComponent } from "react";
import { AboutProps } from "./types.d";

import styles from "./rwd.module.scss";

const { about } = styles;

export const About: FunctionComponent<AboutProps> = () => {
  return (
    <div className={about}>
      <h3>{`Coś nie coś o mnie ;)`}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        corrupti, voluptatum repellendus officia doloremque aspernatur eos
        facilis! Vel optio saepe, maiores ullam voluptatem, rerum asperiores
        labore voluptatum dolor, tempore nisi?
      </p>
    </div>
  );
};
