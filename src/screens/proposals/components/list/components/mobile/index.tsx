import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import Link from 'next/link';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider, Typography,
} from '@material-ui/core';
import { useTokensContext } from '@src/screens/proposals/components/list/contexts/tokens';
import {
  useList,
  useListRow,
} from '@hooks';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@utils/merge_refs';
import { Loading } from '@components';
import { useStyles } from './styles';
import { Token } from './components';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    items,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useTokensContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const classes = useStyles();

  const formatSlots = items.map((x, i) => {
    return ({
      idx: numeral(i + 1).format(0, 0),
      token: (
        <Link href={TOKEN_DETAILS(x.address, x.token)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.token}
          </Typography>
        </Link>
      ),
      price: x.price,
      change: (
        <Typography
          variant="body1"
          className={classnames('change', {
            positive: x.change > 0,
            negative: x.change < 0,
          })}
        >
          {x.change}
        </Typography>
      ),
      volume: x.volume,
      marketCap: x.marketCap,
      holders: x.holders,
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
                    const item = formatSlots[index];
                    return (
                      <div style={style}>
                        <div ref={rowRef}>
                          <Token {...item} />
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
