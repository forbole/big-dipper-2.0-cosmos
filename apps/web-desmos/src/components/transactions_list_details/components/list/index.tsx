/* eslint-disable no-nested-ternary */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import numeral from 'numeral';
import { FC, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useRecoilValue } from 'recoil';
import Loading from '@/components/loading';
import { getMessageByType } from '@/components/msg/utils';
import Result from '@/components/result';
import Tag from '@/components/tag';
import SingleTransaction from '@/components/transactions_list_details/components/list/components/single_transaction';
import useStyles from '@/components/transactions_list_details/components/list/styles';
import type { TransactionsListDetailsState } from '@/components/transactions_list_details/types';
import { useList, useListRow } from '@/hooks/use_react_window';
import { readDate, readTimeFormat } from '@/recoil/settings';
import dayjs, { formatDayJs } from '@/utils/dayjs';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { BLOCK_DETAILS, TRANSACTION_DETAILS } from '@/utils/go_to_page';
import { mergeRefs } from '@/utils/merge_refs';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  isItemLoaded: TransactionsListDetailsState['isItemLoaded'];
  transaction: TransactionsListDetailsState['transactions'][number];
  handleExpand: (id: number) => void;
  expandedAccordionID: number[];
};

const ListItem: FC<ListItemProps> = ({
  index,
  style,
  setRowHeight,
  isItemLoaded,
  transaction,
  handleExpand,
  expandedAccordionID,
}) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const { t } = useTranslation('transactions');
  const dateFormat = useRecoilValue(readDate);
  const timeFormat = useRecoilValue(readTimeFormat);
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
    key: transaction.hash,
    block: (
      <Link shallow prefetch={false} href={BLOCK_DETAILS(transaction.height)}>
        {numeral(transaction.height).format('0,0')}
      </Link>
    ),
    hash: (
      <Link shallow prefetch={false} href={TRANSACTION_DETAILS(transaction.hash)}>
        <span>
          {getMiddleEllipsis(transaction.hash, {
            beginning: 5,
            ending: 5,
          })}
        </span>
      </Link>
    ),
    type: (
      <div>
        <Tag value={transaction.type?.[0] ?? ''} theme="six" />
      </div>
    ),
    result: <Result success={transaction.success} />,
    time: formatDayJs(dayjs.utc(transaction.timestamp), dateFormat, timeFormat),
    messageCount: numeral(transaction.messages.count).format('0,0'),
    messages: transaction.messages.items.map((message) => getMessageByType(message, false, t)),
    amount: transaction.messages.items
      .map((message: any) =>
        'amounts' in message
          ? message.amounts
              .map((amount: any) => parseFloat(amount.value))
              .reduce((x: any, y: any) => x + y)
          : 'amount' in message
          ? message.amount.amount / 1000000
          : 0
      )
      .reduce((prev, next) => prev + next),
  };
  return (
    <div style={style}>
      <div>
        <SingleTransaction
          {...item}
          expandedAccordionID={expandedAccordionID}
          handleExpandID={() => handleExpand(index)}
          index={index}
          rowRef={rowRef}
        />
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
  const { classes, cx } = useStyles();

  const { listRef, getRowHeight, setRowHeight } = useList();

  // will move this into a custom hook, i.e., useAccordionExpand()
  const [expandedAccordionIDs, setExpandedAccordionIDs] = useState<number[]>([]);

  const handleExpand = (id: number) => {
    let expandArr;
    if (expandedAccordionIDs?.includes(id)) {
      expandArr = expandedAccordionIDs?.filter((e) => e !== id);
      setExpandedAccordionIDs(expandArr);
    } else {
      setExpandedAccordionIDs((prev) => [...prev, id]);
    }
  };

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
                    handleExpand={() => handleExpand(index)}
                    expandedAccordionID={expandedAccordionIDs}
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
