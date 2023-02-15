export interface ListMapperProps<T> {
    list: T[];
    elemRender: (elem: T, index: number) => JSX.Element;
    emptyListRender?: () => JSX.Element;
}