import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs, { formatDayJs } from 'ui/utils/dayjs';
import Link from 'next/link';
import { TRANSACTION_DETAILS, BLOCK_DETAILS } from 'ui/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { mergeRefs } from 'ui/utils/merge_refs';
import Loading from 'ui/components/loading';
import Result from 'ui/components/result';
import Tag from 'ui/components/tag';
import { useList, useListRow, useScreenSize } from 'ui/hooks';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { getMessageByType } from 'ui/components/msg';
import { useRecoilValue } from 'recoil';
import { readDate } from 'ui/recoil/settings';
import { useStyles } from './styles';
import type { TransactionsListDetailsState } from '../../types';
import SingleTransaction from './components/single_transaction';

const TransactionList: React.FC<TransactionsListDetailsState> = ({
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
    type: (
      <div>
        <Tag value="txDelegateLabel" theme="six" />
        {x.messages.count > 1 && ' +'}
      </div>
    ),
    result: <Result success={x.success} />,
    time: formatDayJs((dayjs as any).utc(x.timestamp), dateFormat),
    messageCount: numeral(x.messages.count).format('0,0'),
    messages: x.messages.items.map((message) => {
      return getMessageByType(message, false, t);
    }),
  }));

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({ height, width }) => {
          return (
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
                  {({ index, style }) => {
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
                  }}
                </List>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default TransactionList;