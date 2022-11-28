import Loading from '@/components/loading';
import { getMessageByType } from '@/components/msg/utils';
import Result from '@/components/result';
import Tag from '@/components/tag';
import SingleTransaction from '@/components/transactions_list_details/components/list/components/single_transaction';
import { useStyles } from '@/components/transactions_list_details/components/list/styles';
import type { TransactionsListDetailsState } from '@/components/transactions_list_details/types';
import { useList, useListRow, useScreenSize } from '@/hooks';
import { readDate } from '@/recoil/settings';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useRecoilValue } from 'recoil';

const TransactionList: FC<TransactionsListDetailsState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const { isMobile } = useScreenSize();
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const dateFormat = useRecoilValue(readDate);

  const { listRef, getRowHeight, setRowHeight } = useList();

  const items: ComponentProps<typeof SingleTransaction>[] = transactions.map((x) => ({
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
    type: (
      <div>
        <Tag value="txDelegateLabel" theme="six" />
        {x.messages.count > 1 && ' +'}
      </div>
    ),
    result: <Result success={x.success} />,
    time: formatDayJs(dayjs.utc(x.timestamp), dateFormat),
    messageCount: numeral(x.messages.count).format('0,0'),
    messages: x.messages.items.map((message) => getMessageByType(message, false, t)),
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
                  <ListItem {...{ index, style, setRowHeight, isItemLoaded, items }} />
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
    isItemLoaded: TransactionsListDetailsState['isItemLoaded'];
    items: ComponentProps<typeof SingleTransaction>[];
  }
> = ({ index, style, setRowHeight, isItemLoaded, items }) => {
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
