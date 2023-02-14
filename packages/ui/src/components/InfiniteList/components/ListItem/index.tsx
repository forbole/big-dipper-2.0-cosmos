import { ItemData } from '@/components/InfiniteList/types';
import { memo } from 'react';
import { areEqual, ListChildComponentProps } from 'react-window';

const ListItem = memo(
  <TData, TVariables, TItem>({
    index,
    style,
    data: { cursor, variables, items, itemsPerPage, rowHeight, RowComponent },
    isScrolling,
  }: ListChildComponentProps<ItemData<TData, TVariables, TItem>>): JSX.Element | null => (
    <RowComponent
      index={index}
      style={style}
      cursor={cursor}
      variables={variables}
      items={items}
      itemsPerPage={itemsPerPage}
      rowHeight={rowHeight}
      isScrolling={isScrolling ?? false}
    />
  ),
  areEqual
);

export default ListItem;
