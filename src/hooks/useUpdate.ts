import { useReducer } from 'react';

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

/**
 * 自定义更新钩子
 * @description 用于手动触发, 强制更新
 */
function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0);

  return update;
}

export default useUpdate;