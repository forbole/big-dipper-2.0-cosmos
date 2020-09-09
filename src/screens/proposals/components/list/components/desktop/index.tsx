import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useTokensContext } from '@src/screens/proposals/components/list/contexts/tokens';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { mergeRefs } from '@src/utils/merge_refs';
import { VariableSizeGrid as Grid } from 'react-window';
import { useGrid } from '@hooks';
import {
  Loading,
} from '@components';
import { useStyles } from './styles';
import { columns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const {
    items,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  } = useTokensContext();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

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
          className={classnames(classes.price, 'change', {
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
