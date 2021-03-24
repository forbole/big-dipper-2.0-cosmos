import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import dayjs from 'dayjs';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { VariableSizeGrid as Grid } from 'react-window';
import { useBlocksContext } from '@src/screens/blocks/components/list/contexts/blocks';
import {
  AvatarName,
  Loading,
} from '@components';
import { useGrid } from '@hooks';
import { mergeRefs } from '@src/utils/merge_refs';
import { useStyles } from './styles';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    items,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useBlocksContext();
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const formatSlots = items.map((x) => {
    dayjs.extend(relativeTime);
    return ({
      height: (
        <Link href={BLOCK_DETAILS(123)} passHref>
          <Typography variant="body1" component="a">
            {x.height}
          </Typography>
        </Link>
      ),
      validator: (
        <AvatarName
          address={x.validator.identity}
          imageUrl={x.validator.image}
          name={x.validator.moniker}
        />
      ),
      hash: getMiddleEllipsis(x.hash, { beginning: 13 }),
      txs: x.tx,
      time: dayjs(x.time).fromNow(),
    });
  });

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer onResize={onResize}>
        {({
          height, width,
        }) => {
          return (
            <>
              {/* ======================================= */}
              {/* Table Header */}
              {/* ======================================= */}
              <Grid
                ref={columnRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={50}
                rowCount={1}
                rowHeight={() => 50}
                width={width}
              >
                {({
                  columnIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];

                  return (
                    <div
                      style={style}
                      className={classes.cell}
                    >
                      <Typography
                        variant="h4"
                        align={align}
                      >
                        {t(key)}
                      </Typography>
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
              <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}
              >
                {({
                  onItemsRendered, ref,
                }) => {
                  return (
                    <Grid
                      onItemsRendered={({
                        visibleRowStartIndex,
                        visibleRowStopIndex,
                        overscanRowStopIndex,
                        overscanRowStartIndex,
                      }) => {
                        onItemsRendered({
                          overscanStartIndex: overscanRowStartIndex,
                          overscanStopIndex: overscanRowStopIndex,
                          visibleStartIndex: visibleRowStartIndex,
                          visibleStopIndex: visibleRowStopIndex,
                        });
                      }}
                      ref={mergeRefs(gridRef, ref)}
                      columnCount={columns.length}
                      columnWidth={(index) => getColumnWidth(width, index)}
                      height={height - 50}
                      rowCount={itemCount}
                      rowHeight={getRowHeight}
                      width={width}
                    >
                      {({
                        columnIndex, rowIndex, style,
                      }) => {
                        if (!isItemLoaded(rowIndex) && columnIndex === 0) {
                          return (
                            <div
                              style={{
                                ...style,
                                width,
                              }}
                            >
                              <Loading />
                            </div>
                          );
                        }

                        if (!isItemLoaded(rowIndex)) {
                          return null;
                        }

                        const {
                          key, align,
                        } = columns[columnIndex];
                        const item = formatSlots[rowIndex][key];
                        return (
                          <div
                            style={style}
                            className={classnames(classes.cell, classes.body, {
                              odd: !(rowIndex % 2),
                            })}
                          >
                            <Typography
                              variant="body1"
                              align={align}
                              component="div"
                            >
                              {item}
                            </Typography>
                          </div>
                        );
                      }}
                    </Grid>
                  );
                }}
              </InfiniteLoader>
            </>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Desktop;
