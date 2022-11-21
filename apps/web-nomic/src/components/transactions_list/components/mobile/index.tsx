import Loading from 'ui/components/loading';
import SingleTransactionMobile from '@components/single_transaction_mobile';
import { useList, useListRow } from 'ui/hooks';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from 'ui/utils/go_to_page';
import { mergeRefs } from 'ui/utils/merge_refs';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import React, { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import dayjs from 'ui/utils/dayjs';
import type { TransactionsListState } from '../../types';
import { useStyles } from './styles';

const Mobile: FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const classes = useStyles();

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
          {getMiddleEllipsis(x.hash, {
            beginning: 15, ending: 10,
          })}
        </Typography>
      </Link>
    ),
    time: (dayjs as any).utc(x.timestamp).fromNow(),
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
                    <ListItem {...{ index, style, setRowHeight, isItemLoaded, items, itemCount }} />
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
    isItemLoaded: ((index: number) => boolean) | undefined;
    items: ComponentProps<typeof SingleTransactionMobile>[];
    itemCount: number;
  }
> = ({ index, style, setRowHeight, isItemLoaded, items, itemCount }) => {
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
        <SingleTransactionMobile {...item} />
        {index !== itemCount - 1 && <Divider />}
      </div>
    </div>
  );
};

export default Mobile;
