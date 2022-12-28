import Loading from '@/components/loading';
import { useGrid } from '@/hooks';
import { useStyles } from '@/screens/providers/components/providers_list/components/desktop/styles';
import { columns } from '@/screens/providers/components/providers_list/components/desktop/utils';
import type { ProviderInfo } from '@/screens/providers/types';
import { useAddress } from '@/utils/copy_to_clipboard';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import EmailIcon from 'shared-utils/assets/icon-email.svg';
import WebArrowIcon from 'shared-utils/assets/icon-web-arrow.svg';

const isItemLoaded = (index: number, itemCount: number) => index >= 0 && index < itemCount;

const Desktop: React.FC<{ list: ProviderInfo[] }> = ({ list }) => {
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const classes = useStyles();
  const { t } = useTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);

  const className = '';

  const itemCount = list.length;

  const itemsNew = list.map((eachProvider): { [key: string]: ReactNode } => ({
    ownerAddress: (
      <>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(eachProvider.ownerAddress, {
            beginning: 9,
            ending: 8,
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
            beginning: 31,
            ending: 0,
          })}
        </Typography>
        <CopyIcon
          onClick={() => handleCopyToClipboard(eachProvider.hostURI)}
          className={classes.actionIcons}
        />
      </>
    ),
    region: eachProvider.region ? (
      <Typography variant="body1" component="a">
        {eachProvider.region}
      </Typography>
    ) : (
      'Null'
    ),
    organization: eachProvider.organization ? (
      <Typography variant="body1" component="a">
        {eachProvider.organization}
      </Typography>
    ) : (
      'Null'
    ),
    email: eachProvider.emailAddress ? (
      <a href={`mailto:${eachProvider.emailAddress}`}>
        <EmailIcon className={classes.emailIcon} />
      </a>
    ) : (
      'Null'
    ),
    website: eachProvider.website ? (
      <Link
        href={
          eachProvider.website.startsWith('https://')
            ? eachProvider.website
            : `https://${eachProvider.website}`
        }
      >
        <div>
          <Typography variant="body1" component="a">
            {eachProvider.website.length <= 13
              ? eachProvider.website
              : getMiddleEllipsis(eachProvider.website, {
                  beginning: 13,
                  ending: 0,
                })}
          </Typography>
          <WebArrowIcon className={classes.actionIcons} />
        </div>
      </Link>
    ) : (
      'Null'
    ),
  }));

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer onResize={onResize}>
        {({ height, width }) => (
          <>
            {/* ======================================= */}
            {/* Table Header */}
            {/* ======================================= */}
            <Grid
              ref={columnRef as React.LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width, index)}
              height={50}
              rowCount={1}
              rowHeight={() => 50}
              width={width}
            >
              {({ columnIndex, style }) => {
                const { key, align } = columns[columnIndex];

                return (
                  <div style={style} className={classes.cell}>
                    <Typography variant="h4" align={align}>
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
              ref={gridRef as React.LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width, index)}
              height={height - 50}
              rowCount={itemCount}
              rowHeight={getRowHeight}
              width={width}
            >
              {({ columnIndex, rowIndex, style }) => {
                if (!isItemLoaded?.(rowIndex, itemCount) && columnIndex === 0) {
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

                if (!isItemLoaded?.(rowIndex, itemCount)) {
                  return null;
                }

                const { key, align } = columns[columnIndex];
                const item = itemsNew[rowIndex][key];
                return (
                  <div
                    style={style}
                    className={classnames(classes.cell, classes.body, {
                      odd: !(rowIndex % 2),
                    })}
                  >
                    <Typography variant="body1" align={align} component="div">
                      {item}
                    </Typography>
                  </div>
                );
              }}
            </Grid>
          </>
        )}
      </AutoSizer>
    </div>
  );
};

export default Desktop;
