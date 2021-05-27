export interface ListActions<T> {
    set: (newList: T[]) => void;
    push: (...items: T[]) => void;
    updateAt: (index: number, item: T) => void;
    removeAt: (index: number) => void;
    clear: () => void;
    reset: () => void;
}
/**
 * 列表钩子
 * @description 用于快速创建列表数组及列表相关actions
 * @param initList 初始化列表
 * @example const [list, actions] = useList<ListItemInterface>([]);
 */
declare function useList<T>(initList: T[]): [T[], ListActions<T>];
export default useList;
