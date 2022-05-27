import { KeenSliderPlugin } from "keen-slider/react";
import { Logo } from "./types";

export const ResizePlugin: KeenSliderPlugin = (slider) => {
    const observer = new ResizeObserver(function () {
        slider.update();
    });

    slider.on("created", () => {
        observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
        observer.unobserve(slider.container);
    });
};

export const initialAnimationOptions = {
    duration: 10000,
    easing: (time: number) => time,
};

export const preparedArray = (images: Logo[]) => {
    return images.concat(images).concat(images);
};
