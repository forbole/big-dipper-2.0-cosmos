import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider, Typography,
} from '@material-ui/core';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  BLOCK_DETAILS, TRANSACTION_DETAILS,
} from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { mergeRefs } from '@utils/merge_refs';
import {
  SingleTransactionMobile,
  Result,
  Loading,
} from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';
import { TransactionsListState } from '../../types';

const Mobile: React.FC<TransactionsListState> = ({
  className,
  items,
  itemCount,
  loadMoreItems,
  isItemLoaded,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formatItems = items.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      block: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" component="a">
            {x.block}
          </Typography>
        </Link>
      ),
      hash: (
        <Link href={TRANSACTION_DETAILS(x.signature)} passHref>
          <Typography variant="body1" component="a">
            {getMiddleEllipsis(x.hash, {
              beginning: 15, ending: 5,
            })}
          </Typography>
        </Link>
      ),
      result: (
        <Result success={x.success} />
      ),
      messages: x.messages,
      time: dayjs(x.time).fromNow(),
    });
  });

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
                    const item = formatItems[index];
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
