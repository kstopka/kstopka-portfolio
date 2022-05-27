import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { initialAnimationOptions, ResizePlugin } from "./utils";

export const useCarousel = () => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            initial: 0,
            loop: true,
            mode: "snap",
            renderMode: "performance",
            drag: false,
            created(s) {
                s.moveToIdx(5, true, initialAnimationOptions);
            },
            updated(s) {
                s.moveToIdx(s.track.details.abs + 5, true, initialAnimationOptions);
            },
            animationEnded(s) {
                s.moveToIdx(s.track.details.abs + 5, true, initialAnimationOptions);
            },
            slides: {
                perView: "auto",
                spacing: 15,
            },
            breakpoints: {
                "(min-width: 672px)": {
                    slides: {
                        perView: "auto",
                        spacing: 30,
                    },
                },
            },
        },
        [ResizePlugin]
    );

    return { sliderRef };
};
