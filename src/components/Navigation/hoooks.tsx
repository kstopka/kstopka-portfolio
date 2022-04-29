import { useMemo, useState } from "react";

export const useHamburger = (navHamburgerIcon: string, navHamburgerIconOpen: string) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen((prevState) => !prevState);
    };

    const activeClass = useMemo(() => {
        if (isOpen) return ` ${navHamburgerIconOpen}`;
        return `${navHamburgerIcon}`;
    }, [isOpen]);

    return { handleHamburger, activeClass };
};
