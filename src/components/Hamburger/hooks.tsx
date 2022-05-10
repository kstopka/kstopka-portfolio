import { useMemo } from "react";

export const useActiveClassHamburger = (isOpen: boolean, open: string, close: string) => {
    const activeClass = useMemo(() => {
        if (isOpen) return open;
        return close;
    }, [close, isOpen, open]);

    return { activeClass };
};
