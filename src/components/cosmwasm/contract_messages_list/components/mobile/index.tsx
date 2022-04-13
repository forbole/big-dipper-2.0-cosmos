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
  SingleContractMessageMobile,
  Loading,
  Result,
} from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { ContractMessagesListState } from '../../types';

const Mobile: React.FC<ContractMessagesListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  messages,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const items = messages.map((x) => ({
    block: (
      <Link href={BLOCK_DETAILS(x.height)} passHref>
        <Typography variant="body1" component="a">
          {numeral(x.height).format('0,0')}
        </Typography>
      </Link>
    ),
    hash: (
      <Link href={TRANSACTION_DETAILS(x.transaction_hash)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.transaction_hash, {
            beginning: 15, ending: 5,
          })}
        </Typography>
      </Link>
    ),
    result: (
      <Result success={x.success} />
    ),
    time: dayjs.utc(x.timestamp).fromNow(),
    method: x.method,
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
                          <SingleContractMessageMobile {...item} />
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
