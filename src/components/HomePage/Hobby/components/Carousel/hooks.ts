import { useKeenSlider, KeenSliderInstance, KeenSliderOptions } from "keen-slider/react";

import { useEffect, useState, useCallback, MutableRefObject } from "react";
import "keen-slider/keen-slider.min.css";

function fixKeenSliderBugInPreact(
    sliderInstanceRef: MutableRefObject<KeenSliderInstance | null>,
    sliderOptionsValue: KeenSliderOptions
) {
    return () => {
        if (sliderInstanceRef.current) {
            sliderInstanceRef.current.update({ ...sliderOptionsValue });
        }

        return () => {
            if (sliderInstanceRef.current) {
                sliderInstanceRef.current.destroy();
            }
        };
    };
}

const initialCarouselOptions: KeenSliderOptions = {};
const defaultMainCarouselOptions: KeenSliderOptions = {
    loop: true,
    renderMode: "performance",
    slides: {
        perView: 1,
    },
    breakpoints: {
        "(min-width: 1024px)": {
            slides: {
                perView: 2,
            },
        },
        "(min-width: 1440px)": {
            slides: {
                perView: 3,
            },
        },
        "(min-width: 1920px)": {
            slides: {
                perView: 3,
                origin: "auto",
            },
        },
    },
};

export const useCarousel = () => {
    const [jsEnabled, setJsEnabled] = useState(false);

    const [mainSliderRef, mainInstanceRef] = useKeenSlider<HTMLDivElement>(initialCarouselOptions);

    useEffect(fixKeenSliderBugInPreact(mainInstanceRef, defaultMainCarouselOptions), [mainInstanceRef.current]);

    const handleSlidePrev = useCallback(
        // (e: h.JSX.TargetedMouseEvent<HTMLAnchorElement>): void => {
        (e: any): void => {
            e.stopPropagation();
            if (mainInstanceRef.current) mainInstanceRef.current.prev();
        },
        []
    );

    const handleSlideNext = useCallback(
        // (e: h.JSX.TargetedMouseEvent<HTMLAnchorElement>): void => {
        (e: any): void => {
            e.stopPropagation();
            if (mainInstanceRef.current) mainInstanceRef.current.next();
        },
        []
    );

    useEffect(() => {
        setJsEnabled(true);
    }, []);

    return {
        jsEnabled,
        mainSliderRef,
        handleSlidePrev,
        handleSlideNext,
    };
};
