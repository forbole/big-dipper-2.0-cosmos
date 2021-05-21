import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { mergeRefs } from '@utils/merge_refs';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Loading,
  Box,
} from '@components';
import { useProposals } from './hooks';
import {
  Total,
  SingleProposal,
} from './components';
import { useStyles } from './styles';

const ProposalsList: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    uiData,
    itemCount,
    loadMoreItems,
    isItemLoaded,
    rawDataTotal,
  } = useProposals();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(rawDataTotal).format('0,0')} />
        {/* <Search className={classes.search} /> */}
      </div>
      <div className={classes.list}>
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
                            <SingleProposal {...item} />
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
    </Box>
  );
};

export default ProposalsList;
