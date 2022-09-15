import React from 'react';
import classnames from 'classnames';
import AutoSizer from 'react-virtualized-auto-sizer';
import numeral from 'numeral';
import Link from 'next/link';
import {
  TRANSACTION_DETAILS,
  BLOCK_DETAILS,
} from '@utils/go_to_page';
import { VariableSizeGrid as Grid } from 'react-window';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { mergeRefs } from '@utils/merge_refs';
import {
  Loading,
} from '@components';
import { useGrid } from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { TransactionsListState } from '../../types';
import { columns } from './utils';
import { useStyles } from './styles';

const Desktop: React.FC<TransactionsListState> = ({
  className,
  itemCount,
  loadMoreItems,
  isItemLoaded,
  transactions,
}) => {
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const classes = useStyles();
  const { t } = useTranslation('providers');

  // const items = transactions.map((x) => ({
  //   messages: numeral(x.messages.count).format('0,0'),
  // }));

  const itemsNewProviders = [{
    adress: 'fghjkl,mnbhgfyui',
    uri: 'fghjkl,mnbhgfyui',
    region: 'asia',
    organizationName: 'Forbole',
    email: 'forbole@gmail.com',
    webAdress: 'Forbole.com',
  },
  {
    adress: 'fghjkl,mnbhgfyui',
    uri: 'fghjkl,mnbhgfyui',
    region: 'asia',
    organizationName: 'Forbole',
    email: 'forbole@gmail.com',
    webAdress: 'Forbole.com',
  },
  {
    adress: 'fghjkl,mnbhgfyui',
    uri: 'fghjkl,mnbhgfyui',
    region: 'asia',
    organizationName: 'Forbole',
    email: 'forbole@gmail.com',
    webAdress: 'Forbole.com',
  },
  ];

  const itemsNew = itemsNewProviders.map((x) => ({
    ownerAddress: (
      <Typography variant="body1" component="a">
        {getMiddleEllipsis(x.adress, {
          beginning: 20, ending: 15,
        })}
      </Typography>
    ),
    hostUri: (
      <Typography variant="body1" component="a">
        {getMiddleEllipsis(x.uri, {
          beginning: 20, ending: 15,
        })}
      </Typography>
    ),
    region: (
      <Typography variant="body1" component="a">
        {x.region}
      </Typography>
    ),
    organization: (
      <Typography variant="body1" component="a">
        {x.organizationName}
      </Typography>
    ),
    email: (
      <Typography variant="body1" component="a">
        {x.organizationName}
      </Typography>
    ),
    website: (
      <Link href={TRANSACTION_DETAILS(x.webAdress)} passHref>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(x.webAdress, {
            beginning: 20, ending: 15,
          })}
        </Typography>
      </Link>
    ),
  }));

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
              {`columns=${JSON.stringify(columns)}`}
              <hr />
              {`width=${JSON.stringify(width)}`}
              <hr />
              {`getColumnWidth(width,0)=${JSON.stringify(getColumnWidth(width, 0))}`}
              <hr />
              <Grid
                columnCount={columns.length}
                // columnWidth={(index) => getColumnWidth(width, index)}
                columnWidth={() => 50}
                // height={height - 50}
                height={500}
                // rowCount={itemCount}
                rowCount={0}
                // rowHeight={getRowHeight}
                rowHeight={() => 50}
                width={width}
                // className="scrollbar"
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
                  const item = itemsNew[rowIndex][key];
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
