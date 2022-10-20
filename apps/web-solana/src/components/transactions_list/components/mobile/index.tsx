import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import {
  TRANSACTION_DETAILS,
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { mergeRefs } from '@utils/merge_refs';
import {
  SingleTransactionMobile,
  Loading,
  Result,
} from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { TransactionsListState } from '../../types';

const Mobile: React.FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const items = transactions.map((x) => ({
    slot: (
      <Link href={BLOCK_DETAILS(x.slot)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.slot).format('0,0')}
        </Typography>
      </Link>
    ),
    signature: (
      <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.signature, {
            beginning: 15, ending: 5,
          })}
        </Typography>
      </Link>
    ),
    result: (
      <Result success={x.success} />
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
    instructions: numeral(x.numInstructions).format('0,0'),
  }));

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({
                onItemsRendered, ref,
              }) => (
                <List
                  className="List"
                  height={height}
                  itemCount={itemCount}
                  itemSize={getRowHeight}
                  onItemsRendered={onItemsRendered}
                  ref={mergeRefs(listRef, ref)}
                  width={width}
                >
                  {({
                    index, style,
                  }) => {
                    const { rowRef } = useListRow(index, setRowHeight);
                    if (!isItemLoaded(index)) {
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

export default Mobile;
