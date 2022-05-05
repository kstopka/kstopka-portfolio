import { useMemo, useState } from "react";

export const useHamburger = (navHamburgerIconOpen: string, navHamburgerIcon: string) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen((prevState) => !prevState);
    };

    const activeClass = useMemo(() => {
        if (isOpen) return true;
        return false;
    }, [isOpen]);

    const hamburgerClass = useMemo(() => {
        if (activeClass) return navHamburgerIconOpen;
        return navHamburgerIcon;
    }, [isOpen]);

    return { handleHamburger, hamburgerClass };
};
