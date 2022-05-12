import { useRef } from "react";
import { addActiveClassToColor, removeEveryActiveClassFromChildren } from "./utils";

export const useMenuLiItem = (handleHamburger: () => void) => {
    const ref = useRef<HTMLUListElement | null>(null);

    const onChangeHandler = (e: any) => {
        removeEveryActiveClassFromChildren(ref);
        addActiveClassToColor(e);
        handleHamburger();
    };

    return {
        ref,
        onChangeHandler,
    };
};
