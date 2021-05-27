import { ListProps } from './list.interface';
/**
 * 列表基础组件
 * @description 范型说明, 范型主要用于内容组件, T 为 type
 * @param props 列表 props
 */
declare function List<T>(props: ListProps<T>): JSX.Element;
export default List;
