import React from 'react';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import useTranslation from 'next-translate/useTranslation';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import { useGrid } from '@hooks';
import {
  columns, formatRows,
} from './utils';
import { useStyles } from './styles';

const Desktop: React.FC<{
  className?: string;
  signatures: AvatarName[];
}> = ({
  className, signatures,
}) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);
  const rows = formatRows(signatures);

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
              <Grid
                ref={gridRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={rows.length}
                rowHeight={getRowHeight}
                width={width}
              >
                {({
                  columnIndex, rowIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];
                  const selectedItem = rows[rowIndex][key];
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
                        {selectedItem}
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
