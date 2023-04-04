import Loading from '@/components/loading';
import SingleTransactionMobile from '@/components/single_transaction_mobile';
import Timestamp from '@/components/Timestamp';
import useStyles from '@/components/transactions_list/components/mobile/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useList, useListRow } from '@/hooks/use_react_window';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  isItemLoaded: ((index: number) => boolean) | undefined;
  transaction: TransactionsListState['transactions'][number];
  isLast: boolean;
};

const ListItem: FC<ListItemProps> = ({
  index,
  style,
  setRowHeight,
  isItemLoaded,
  transaction,
  isLast,
}) => {
  const { rowRef } = useListRow(index, setRowHeight);
  if (!isItemLoaded?.(index)) {
    return (
      <div style={style}>
        <div ref={rowRef}>
          <Loading />
        </div>
      </div>
    );
  }
  const item = {
    block: (
      <Link shallow href={BLOCK_DETAILS(transaction.height)}>
        {numeral(transaction.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow href={TRANSACTION_DETAILS(transaction.hash)}>
        {getMiddleEllipsis(transaction.hash, {
          beginning: 15,
          ending: 10,
        })}
      </Link>
    ),
    time: <Timestamp timestamp={transaction.timestamp} />,
  };
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleTransactionMobile {...item} />
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const { classes, cx } = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <div className={cx(classes.root, className)}>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isItemLoaded ?? (() => true)}
            itemCount={itemCount}
            loadMoreItems={
              loadMoreItems ??
              (() => {
                // do nothing
              })
            }
          >
            {({ onItemsRendered, ref }) => (
              <List
                className="List"
                height={height ?? 0}
                itemCount={itemCount}
                itemSize={getRowHeight}
                onItemsRendered={onItemsRendered}
                ref={mergeRefs(listRef, ref)}
                width={width ?? 0}
              >
                {({ index, style }) => (
                  <ListItem
                    key={index}
                    index={index}
                    style={style}
                    setRowHeight={setRowHeight}
                    isItemLoaded={isItemLoaded}
                    transaction={transactions[index]}
                    isLast={index === transactions.length - 1}
                  />
                )}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
