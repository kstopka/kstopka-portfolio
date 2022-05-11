import { useState } from "react";

export const useHamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = () => {
        setIsOpen((prevState) => !prevState);
    };

    return { isOpen, handleHamburger };
};
