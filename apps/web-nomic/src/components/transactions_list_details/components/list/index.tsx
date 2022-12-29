import Loading from '@/components/loading';
import SingleTransaction from '@/components/transactions_list_details/components/list/components/single_transaction';
import { useStyles } from '@/components/transactions_list_details/components/list/styles';
import type { TransactionsListDetailsState } from '@/components/transactions_list_details/types';
import { useList, useListRow, useScreenSize } from '@/hooks';
import { readDate } from '@/recoil/settings';
import { TransactionType } from '@/screens/home/components/transactions/types';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useRecoilValue } from 'recoil';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  transaction: TransactionType;
  isItemLoaded: ((index: number) => boolean) | undefined;
};

const ListItem: FC<ListItemProps> = ({ index, style, setRowHeight, transaction, isItemLoaded }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const { isMobile } = useScreenSize();
  const dateFormat = useRecoilValue(readDate);

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
          {isMobile
            ? getMiddleEllipsis(transaction.hash, {
                beginning: 15,
                ending: 5,
              })
            : transaction.hash}
        </Typography>
      </Link>
    ),
    time: formatDayJs(dayjs.utc(transaction.timestamp), dateFormat),
  };
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleTransaction {...item} />
      </div>
    </div>
  );
};

const TransactionList: FC<TransactionsListDetailsState> = ({
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
                    transaction={transactions[index]}
                    isItemLoaded={isItemLoaded}
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

export default TransactionList;
