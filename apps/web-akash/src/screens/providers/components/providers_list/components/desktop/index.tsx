import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, LegacyRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeGrid as Grid } from 'react-window';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import EmailIcon from 'shared-utils/assets/icon-email.svg';
import WebArrowIcon from 'shared-utils/assets/icon-web-arrow.svg';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { useAddress } from '@/utils/copy_to_clipboard';
import type { ProviderInfo } from '@/screens/providers/types';
import { columns } from '@/screens/providers/components/providers_list/components/desktop/utils';
import useStyles from '@/screens/providers/components/providers_list/components/desktop/styles';
import useShallowMemo from '@/hooks/useShallowMemo';
import { useGrid } from '@/hooks/use_react_window';
import Loading from '@/components/loading';

const isItemLoaded = (index: number, itemCount: number) => index >= 0 && index < itemCount;

const Desktop: FC<{ list: ProviderInfo[]; className?: string }> = ({ list, className }) => {
  const { gridRef, columnRef, onResize, getColumnWidth, getRowHeight } = useGrid(columns);

  const { classes, cx } = useStyles();
  const { t } = useAppTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);

  const itemCount = list.length;
  const listMemo = useShallowMemo(list);

  const itemsNew = listMemo.map((eachProvider) => ({
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
        prefetch={false}
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
    <div className={cx(classes.root, className)}>
      <AutoSizer onResize={onResize}>
        {({ height, width }) => (
          <>
            {/* ======================================= */}
            {/* Table Header */}
            {/* ======================================= */}
            <Grid
              ref={columnRef as LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={50}
              rowCount={1}
              rowHeight={() => 50}
              width={width ?? 0}
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
              ref={gridRef as LegacyRef<Grid>}
              columnCount={columns.length}
              columnWidth={(index) => getColumnWidth(width ?? 0, index)}
              height={(height ?? 0) - 50}
              rowCount={itemCount}
              rowHeight={getRowHeight}
              width={width ?? 0}
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
                const item = itemsNew[rowIndex][key as keyof (typeof itemsNew)[number]];
                return (
                  <div
                    style={style}
                    className={cx(classes.cell, classes.body, {
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
