import { useRef } from "react";
import { TargetedEvent } from "../MenuItem/types.d";
import { addActiveClassToColor, removeEveryActiveClassFromChildren } from "./utils";

export const useMenuLiItem = (handleHamburger: () => void) => {
    const ref = useRef<HTMLUListElement | null>(null);

    const onChangeHandler = (e: any, activeName: string) => {
        removeEveryActiveClassFromChildren(ref, activeName);
        addActiveClassToColor(e, activeName);
        handleHamburger();
    };

    return {
        ref,
        onChangeHandler,
    };
};
