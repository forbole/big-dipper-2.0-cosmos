import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import { mergeRefs } from '@utils/merge_refs';
import { Divider } from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  useProfilesRecoil,
} from '@recoil/profiles';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Loading,
  Box,
} from '@components';
import {
  Total,
  SingleIscn,
} from './components';
import { useStyles } from './styles';
import { IscnType } from '../../types';

const ProposalsList: React.FC<{
  className?: string;
  items: IscnType[];
  rawDataTotal: number;
  isItemLoaded: (index: number) => boolean;
  itemCount: number;
  loadMoreItems: () => void;
}> = ({
  className,
  items,
  rawDataTotal,
  isItemLoaded,
  itemCount,
  loadMoreItems,
}) => {
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const proposerProfiles = useProfilesRecoil(items.map((x) => x.owner));
  const formattedItems = items.map((x, i) => {
    return ({
      ...x,
      owner: proposerProfiles[i],
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.topContent}>
        <Total className={classes.total} total={numeral(rawDataTotal).format('0,0')} />
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
                      const item = formattedItems[index];
                      return (
                        <div style={style}>
                          <div ref={rowRef}>
                            <SingleIscn {...item} />
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
