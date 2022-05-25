import * as React from "react";
import { FunctionComponent } from "react";
import { CarouselHobbyProps } from "./types.d";

import styles from "./rwd.module.scss";
import { ArrowLeftSVG } from "../../../../shared/icons/ArrowLeftSVG";
import { ArrowRightSVG } from "../../../../shared/icons/ArrowRightSVG";
import { useCarousel } from "./hooks";
import { CardHobby } from "..";

const {
    wrapperCarousel,
    wrapperCarouselArrows,
    wrapperCarouselArrowsLeft,
    wrapperCarouselArrowsRight,
    wrapperCarouselSlider,
} = styles;

export const CarouselHobby: FunctionComponent<CarouselHobbyProps> = ({ cards }) => {
    const { handleSlidePrev, handleSlideNext, mainSliderRef } = useCarousel();
    return (
        <div className={wrapperCarousel}>
            <div className={wrapperCarouselArrows}>
                <button className={wrapperCarouselArrowsLeft} onClick={handleSlidePrev}>
                    <ArrowLeftSVG />
                </button>
                <button className={wrapperCarouselArrowsRight} onClick={handleSlideNext}>
                    <ArrowRightSVG />
                </button>
            </div>
            <div ref={mainSliderRef} className={`keen-slider ${wrapperCarouselSlider}`}>
                {[...cards, ...cards].map((card, index) => {
                    return (
                        <div
                            className={`keen-slider__slide number-slide${index + 1} homeReviewsCarouselSingleSlide`}
                            key={card.title}
                        >
                            <CardHobby {...card} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
