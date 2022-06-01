export interface ILink {
    to: string;
    name: string;
    value: string;
}

export interface MenuLiItemProps {
    link: ILink;
    onChangeHandler: (e: TargetedEvent<HTMLLIElement, Event>, activeName: string) => void;
}

type Exclude<T, U> = T extends U ? never : T;

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface Event {}
interface EventTarget {}
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export type TargetedEvent<Target extends EventTarget = EventTarget, TypedEvent extends Event = Event> = Omit<
    TypedEvent,
    "currentTarget"
> & {
    readonly currentTarget: Target;
};
