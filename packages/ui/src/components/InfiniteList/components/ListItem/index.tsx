import { ItemData } from '@/components/InfiniteList/types';
import { memo } from 'react';
import { areEqual, ListChildComponentProps } from 'react-window';

const ListItem = memo(
  <TData, TVariables, TItem>({
    index,
    style,
    data: { variables, items, itemsPerPage, rowHeight, RowComponent },
    isScrolling,
    width,
    height,
  }: ListChildComponentProps<ItemData<TData, TVariables, TItem>>): JSX.Element | null => (
    <RowComponent
      index={index}
      style={style}
      variables={variables}
      items={items}
      itemsPerPage={itemsPerPage}
      rowHeight={rowHeight}
      isScrolling={isScrolling ?? false}
      width={width}
      height={height}
    />
  ),
  areEqual
);

export default ListItem;
