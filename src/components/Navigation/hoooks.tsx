import { useMemo, useState } from "react";

export const useHamburger = (open: string, close: string) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen((prevState) => !prevState);
    };

    const activeClass = useMemo(() => {
        if (isOpen) return true;
        return false;
    }, [isOpen]);

    const addHamburgerClass = useMemo(() => {
        if (activeClass) return open;
        return close;
    }, [isOpen]);

    return { handleHamburger, addHamburgerClass };
};
