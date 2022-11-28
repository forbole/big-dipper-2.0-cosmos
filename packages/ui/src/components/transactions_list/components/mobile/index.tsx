import dayjs from '@/utils/dayjs';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import Loading from '@/components/loading';
import Result from '@/components/result';
import SingleTransactionMobile from '@/components/single_transaction_mobile';
import Tag from '@/components/tag';
import { useStyles } from '@/components/transactions_list/components/mobile/styles';
import type { TransactionsListState } from '@/components/transactions_list/types';
import { useList, useListRow } from '@/hooks';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { mergeRefs } from '@/utils/merge_refs';

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
            beginning: 15,
            ending: 5,
          })}
        </Typography>
      </Link>
    ),
    type: (
      <div>
        <Tag value={x.type?.[0] ?? ''} theme="six" />
        {x.messages.count > 1 && ` + ${x.messages.count - 1}`}
      </div>
    ),
    result: <Result success={x.success} />,
    time: dayjs.utc(x.timestamp).fromNow(),
    messages: numeral(x.messages.count).format('0,0'),
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
    setRowHeight: Parameters<typeof useListRow>[1];
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
