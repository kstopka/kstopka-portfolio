import { TargetedEvent } from "../MenuItem/types.d";
import { MutableRefObject } from "react";

export const removeEveryActiveClassFromChildren = (
    ref: MutableRefObject<HTMLUListElement | null>,
    activeName: string
) => {
    if (ref.current) {
        const { children } = ref.current;
        const listOfChildren = Array.from(children);

        listOfChildren.forEach((child) => {
            if (child) child.classList.remove(activeName);
        });
    }
};

export const addActiveClassToColor = (e: TargetedEvent<HTMLLIElement, Event>, activeName: string) => {
    if (e.currentTarget) e.currentTarget.classList.add(activeName);
};

export const addActiveClassOnLoad = (value: string, selectedValue: string, activeName: string): string => {
    if (value === selectedValue) {
        return activeName;
    }
    return "";
};
