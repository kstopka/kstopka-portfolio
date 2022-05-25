import { ILink } from "../MenuItem/types.d";

export interface MenuProps {
    isOpen: boolean;
    links: ILink[];
    handleHamburger: () => void;
}

export interface MutableRef<T> {
    current: T;
}
