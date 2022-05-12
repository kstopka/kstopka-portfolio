import { ILink } from "../MenuItem/types.d";

interface MenuProps {
    isOpen: boolean;
    links: ILink[];
    handleHamburger: () => void;
}

interface MutableRef<T> {
    current: T;
}

export type { MenuProps, MutableRef };
