import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import { useGrid } from '@hooks';
import { SortArrows } from '@components';
import { useStyles } from './styles';
import { useValidatorsContext } from '../../contexts/validators';
import { fetchColumns } from './utils';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('validators');
  const classes = useStyles();
  const columns = fetchColumns(t);

  const {
    uiData,
    sortDirection,
    sortKey,
    handleSort,
  } = useValidatorsContext();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

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
                      onClick={() => (sort ? handleSort(sortingKey) : null)}
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
                          sort={sortKey === sortingKey
                            ? sortDirection
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
                rowCount={uiData.length}
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
                  const item = uiData[rowIndex][key];
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
