import { useState } from "react";

export const useHamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburger = (close?: boolean) => {
        if (!close) {
            return setIsOpen(false);
        }
        setIsOpen((prevState) => !prevState);
    };

    return { isOpen, handleHamburger };
};
