import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import { useBlocksContext } from '@src/screens/blocks/components/list/contexts/blocks';
import {
  SingleBlockMobile,
  Loading,
} from '@components';
import { mergeRefs } from '@utils/merge_refs';
import {
  useList,
  useListRow,
} from '@hooks';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    formatUi,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useBlocksContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();
  const uiData = formatUi();

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
                    const item = uiData[index];
                    return (
                      <div style={style}>
                        <div ref={rowRef}>
                          <SingleBlockMobile {...item} />
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
