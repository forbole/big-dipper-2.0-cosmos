import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import { useGrid } from '@hooks';
import {
  SortArrows,
  AvatarName,
} from '@components';
import { SkipRate } from '..';
import { useStyles } from './styles';
import { fetchColumns } from './utils';
import { ItemType } from '../../types';
import { useDesktop } from './hooks';

const Desktop: React.FC<{
  className?: string;
  sortDirection: 'desc' | 'asc';
  sortKey: string;
  handleSort: (key: string) => void;
  items: ItemType[];
  tab: number;
}> = (props) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchColumns(t);

  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const formattedItems = props.items.map((x, i) => {
    return ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      stake: `${numeral(x.stake).format('0,0')} (${numeral(x.stakePercent).format('0,0.00')}%)`,
      commission: `${x.commission}%`,
      rootDistance: numeral(x.rootDistance).format('0,0'),
      voteDistance: numeral(x.voteDistance).format('0,0'),
      skipRate: (
        <SkipRate
          skipRate={x.skipRate}
        />
      ),
    });
  });

  useDesktop(props.tab, gridRef);

  return (
    <div className={classnames(props.className, classes.root)}>
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
                    key,
                    align,
                    component,
                    sort,
                    sortKey: sortingKey,
                  } = columns[columnIndex];

                  return (
                    <div
                      style={style}
                      className={classnames(
                        classes.cell,
                        {
                          [classes.flexCells]: component || sort,
                          [align]: sort || component,
                          sort,
                        },
                      )}
                      onClick={() => (sort ? props.handleSort(sortingKey) : null)}
                      role="button"
                    >
                      {component || (
                      <Typography
                        variant="h4"
                        align={align}
                      >
                        {t(key)}
                        {!!sort && (
                        <SortArrows
                          sort={props.sortKey === sortingKey
                            ? props.sortDirection
                            : undefined}
                        />
                        )}
                      </Typography>
                      )}
                    </div>
                  );
                }}
              </Grid>
              {/* ======================================= */}
              {/* Table Body */}
              {/* ======================================= */}
              <Grid
                ref={gridRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={formattedItems.length}
                rowHeight={getRowHeight}
                width={width}
                className="scrollbar"
              >
                {({
                  columnIndex, rowIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];
                  const item = formattedItems[rowIndex][key];
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
            </>
          );
        }}
      </AutoSizer>
    </div>

  );
};

export default Desktop;
