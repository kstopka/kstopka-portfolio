import * as React from "react";
import { FunctionComponent } from "react";
import { CarouselTechnologiesProps } from "./types";
import styles from "./rwd.module.scss";
import { useCarousel } from "./hooks";
// import { preparedArray } from "./utils";

const { wrapperTechnologies, wrapperTechnologiesCarousel, wrapperTechnologiesCarouselImg } = styles;

export const CarouselTechnologies: FunctionComponent<CarouselTechnologiesProps> = ({ logos }) => {
    const { sliderRef } = useCarousel();
    // const preparedImages = preparedArray(logos);

    return (
        <div className={wrapperTechnologies}>
            <div ref={sliderRef} className={`keen-slider`}>
                {[...logos, ...logos].map(({ src, alt }, index) => {
                    return (
                        <div
                            className={`keen-slider__slide number-slide${index + 1} ${wrapperTechnologiesCarousel}`}
                            key={src + alt}
                        >
                            <img className={wrapperTechnologiesCarouselImg} src={src} alt={alt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
