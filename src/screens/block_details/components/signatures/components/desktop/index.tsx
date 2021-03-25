import React from 'react';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import useTranslation from 'next-translate/useTranslation';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import {
  Result,
  AvatarName,
} from '@components';
import { useGrid } from '@hooks';
import { useBlockContext } from '../../../../contexts/block';
import { columns } from './utils';
import { useStyles } from './styles';

const Desktop: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('blocks');
  const classes = useStyles();
  const {
    item,
  } = useBlockContext();
  const { signatures = [] } = item;
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const formatItems = signatures.map((x) => {
    return ({
      signed: (
        <Result success={x.signed} />
      ),
      validator: (
        <AvatarName
          address={x.validator.identity}
          imageUrl={x.validator.image}
          name={x.validator.moniker}
        />
      ),
      votingPower: x.votingPower,
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
              <Grid
                ref={gridRef}
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={signatures.length}
                rowHeight={getRowHeight}
                width={width}
              >
                {({
                  columnIndex, rowIndex, style,
                }) => {
                  const {
                    key, align,
                  } = columns[columnIndex];
                  const selectedItem = formatItems[rowIndex][key];
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
