import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useRecoilValue } from 'recoil';
import Loading from 'ui/components/loading';
import { useList, useListRow, useScreenSize } from 'ui/hooks';
import { readDate } from 'ui/recoil/settings';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from 'ui/utils/go_to_page';
import { mergeRefs } from 'ui/utils/merge_refs';
import type { TransactionsListDetailsState } from '../../types';
import SingleTransaction from './components/single_transaction';
import { useStyles } from './styles';

const TransactionList: FC<TransactionsListDetailsState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const { isMobile } = useScreenSize();
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const { listRef, getRowHeight, setRowHeight } = useList();

  const items = transactions.map((x) => ({
    block: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(x.hash)} passHref>
        <Typography variant="body1" component="a">
          {isMobile
            ? getMiddleEllipsis(x.hash, {
                beginning: 15,
                ending: 5,
              })
            : x.hash}
        </Typography>
      </Link>
    ),
    time: formatDayJs((dayjs as any).utc(x.timestamp), dateFormat),
  }));

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
                    <ListItem {...{ index, style, setRowHeight, items, isItemLoaded }} />
                  )}
                </List>
              )}
            </InfiniteLoader>
          )}
      </AutoSizer>
    </div>
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: ReturnType<typeof useList>['setRowHeight'];
    items: Array<ComponentProps<typeof SingleTransaction>>;
    isItemLoaded: ((index: number) => boolean) | undefined;
  }
> = ({ index, style, setRowHeight, items, isItemLoaded }) => {
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
  const item = items[index];
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleTransaction {...item} />
      </div>
    </div>
  );
};

export default TransactionList;
