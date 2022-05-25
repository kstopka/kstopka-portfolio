import { TargetedEvent } from "../MenuItem/types.d";
// import { MutableRef } from "./types.d";
import { MutableRefObject } from "react";

export const removeEveryActiveClassFromChildren = (ref: MutableRefObject<HTMLUListElement | null>) => {
    if (ref.current) {
        const { children } = ref.current;
        const listOfChildren = Array.from(children);

        listOfChildren.forEach((child) => {
            if (child) child.classList.remove("active");
        });
    }
};

export const addActiveClassToColor = (e: TargetedEvent<HTMLLIElement, Event>) => {
    if (e.currentTarget) e.currentTarget.classList.add("active");
};

export const addActiveClassOnLoad = (value: string, selectedValue: string): string => {
    if (value === selectedValue) {
        return "active";
    }
    return "";
};
