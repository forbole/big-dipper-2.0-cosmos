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
import EmailIcon from '@assets/icon-email.svg';
import WebArrowIcon from '@assets/icon-web-arrow.svg';
import CopyIcon from '@assets/icon-copy.svg';
import { useAddress } from '@utils/copy_to_clipboard';
import { columns } from './utils';
import { useStyles } from './styles';
import { ProviderInfo } from '../../../../types';

const Desktop: React.FC<{list: ProviderInfo[]}> = (list) => {
  const {
    gridRef,
    columnRef,
    onResize,
    getColumnWidth,
    getRowHeight,
  } = useGrid(columns);

  const classes = useStyles();
  const { t } = useTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);

  const className = '';
  // const itemCount = itemsNewProviders.length;
  const itemCount = list.list.length; // to be fixed
  const loadMoreItems = (...args) => { console.log('args', JSON.stringify(args)); };
  const isItemLoaded = (index) => index >= 0 && index < itemCount;

  const itemsNew = list.list.map((eachProvider) => ({
    ownerAddress: (
      <>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(eachProvider.ownerAddress, {
            beginning: 9, ending: 8,
          })}
        </Typography>
        <CopyIcon
          onClick={() => handleCopyToClipboard(eachProvider.ownerAddress)}
          className={classes.actionIcons}
        />
      </>
    ),
    hostUri: (
      <>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(eachProvider.hostURI, {
            beginning: 8, ending: 8,
          })}
        </Typography>
        <CopyIcon
          onClick={() => handleCopyToClipboard(eachProvider.hostURI)}
          className={classes.actionIcons}
        />
      </>
    ),
    region: eachProvider.region
      ? (
        <Typography variant="body1" component="a">
          {eachProvider.region}
        </Typography>
      ) : (
        'Null'
      ),
    organization: eachProvider.organization
      ? (
        <Typography variant="body1" component="a">
          {eachProvider.organization}
        </Typography>
      ) : (
        'Null'
      ),
    email: eachProvider.emailAddress
      ? (
        <a href={`mailto:${eachProvider.emailAddress}`}>
          <EmailIcon />
        </a>
      ) : (
        'Null'
      ),
    website: eachProvider.website
      ? (
        <Link href={`https://${eachProvider.website}`}>
          <div>
            <Typography variant="body1" component="a">
              {getMiddleEllipsis(eachProvider.website, {
                beginning: 13, ending: 0,
              })}
            </Typography>
            <WebArrowIcon />
          </div>
        </Link>
      ) : (
        'Null'
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

              <Grid
                columnCount={columns.length}
                columnWidth={(index) => getColumnWidth(width, index)}
                height={height - 50}
                rowCount={itemCount}
                rowHeight={getRowHeight}
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
