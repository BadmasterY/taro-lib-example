import React from 'react';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import { ListProps } from './list.interface';

/**
 * 列表基础组件
 * @description 范型说明, 范型主要用于内容组件, T 为 type
 * @param props 列表 props
 */
function List<T>(props: ListProps<T>) {
  const { dataSource, classStr, itemKey, renderItem } = props;

  const keys: Record<string, string> = {};

  const renderInnerItem = (item: T, index: number) => {
    if (!renderItem) {
      return;
    }

    let key;

    if (typeof itemKey === 'function') {
      key = itemKey(item);
    } else if (typeof itemKey === 'string') {
      key = item[itemKey];
    } else {
      key = item['key'];
    }

    if (!key) {
      key = `list-${index}`;
    }

    keys[index] = key;

    return renderItem(item, index);
  };

  const items = dataSource.map((item: T, index: number) => renderInnerItem(item, index));
  const childrenList = React.Children.map(items, (child, index) => {
    if(child) {
      child.key = keys[index];
    }

    return child;
  });

  return (
    <View className={classnames('list', classStr)}>
      {
        childrenList
      }
    </View>
  );
}

export default List;