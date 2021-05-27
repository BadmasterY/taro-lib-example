export interface BaseProps<T> {
    value: T;
    key: number;
    index: number;
    onClick: (value: T, index: number) => void;
}

export interface ListProps<T> {
    dataSource: T[];
    classStr?: string;
    itemKey?: string | ((item: T) => string);
    renderItem?: (item: T, index: number) => JSX.Element;
}