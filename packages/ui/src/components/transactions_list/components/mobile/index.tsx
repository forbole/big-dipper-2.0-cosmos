import Loading from '@/components/loading';
import Result from '@/components/result';
import SingleTransactionMobile from '@/components/single_transaction_mobile';
import Tag from '@/components/tag';
import { useStyles } from '@/components/transactions_list/components/mobile/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useList, useListRow } from '@/hooks';
import dayjs from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
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
      <Link href={BLOCK_DETAILS(transaction.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(transaction.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(transaction.hash)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(transaction.hash, {
            beginning: 15,
            ending: 5,
          })}
        </Typography>
      </Link>
    ),
    type: (
      <div>
        <Tag value={transaction.type?.[0] ?? ''} theme="six" />
        {transaction.messages.count > 1 && ` + ${transaction.messages.count - 1}`}
      </div>
    ),
    result: <Result success={transaction.success} />,
    time: dayjs.utc(transaction.timestamp).fromNow(),
    messages: numeral(transaction.messages.count).format('0,0'),
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
  const classes = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <div className={classnames(className, classes.root)}>
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
                height={height}
                itemCount={itemCount}
                itemSize={getRowHeight}
                onItemsRendered={onItemsRendered}
                ref={mergeRefs(listRef, ref)}
                width={width}
              >
                {({ index, style }) => (
                  <ListItem
                    key={index}
                    index={index}
                    style={style}
                    setRowHeight={setRowHeight}
                    isItemLoaded={isItemLoaded}
                    transaction={transactions[index]}
                    isLast={index === itemCount - 1}
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
