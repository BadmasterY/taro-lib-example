import { useMemo, useRef } from 'react';
import useUpdate from './useUpdate';

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
function useList<T>(initList: T[]): [T[], ListActions<T>] {
  const list = useRef(initList);

  const update = useUpdate();

  const actions = useMemo<ListActions<T>>(() => {
    const action: ListActions<T> = {
      set(newList) {
        list.current = newList;
        update();
      },
      push(...items) {
        if (items.length === 0) {
          return;
        }

        let temp: T[] | null = list.current.slice();
        actions.set(temp.concat(items));
        temp = null;

      },
      updateAt(index, item) {
        let temp: T[] | null = list.current.slice();
        temp[index] = item;

        actions.set(temp);

        temp = null;
      },
      removeAt(index) {
        let temp: T[] | null = list.current.slice();
        temp.splice(index, 1);

        actions.set(temp);

        temp = null;
      },
      clear() {
        actions.set([]);
      },
      reset() {
        actions.set(initList.slice());
      }
    };

    return action;
  }, [list]);

  return [list.current, actions];
}

export default useList;