import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import dayjs from '@utils/dayjs';
import Link from 'next/link';
import {
  Typography, Divider,
} from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { mergeRefs } from '@utils/merge_refs';
import {
  Loading,
  Result,
} from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import EmailIcon from '@assets/icon-email.svg';
import WebArrowIcon from '@assets/icon-web-arrow.svg';
import CopyIcon from '@assets/icon-copy.svg';
import { useAddress } from '@utils/copy_to_clipboard';
import useTranslation from 'next-translate/useTranslation';
import { ProviderInfo } from '../../../../types';
import { useStyles } from './styles';
import { SingleProvider } from './component';

const Mobile: React.FC<{list: ProviderInfo[]}> = (list) => {
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);
  const className = '';

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

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
          <EmailIcon className={classes.actionIcons} />
        </a>
      ) : (
        'Null'
      ),
    website: eachProvider.website
      ? (
        // <Link href={`https://${eachProvider.website}`}>
        <Link href={eachProvider.website}>
          <div>
            <Typography variant="body1" component="a">
              {eachProvider.website.length <= 13
                ? eachProvider.website
                : getMiddleEllipsis(eachProvider.website, {
                  beginning: 13, ending: 0,
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
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
              {({
                onItemsRendered, ref,
              }) => (
                <List
                  className="List"
                  height={height}
                  itemCount={itemCount}
                  itemSize={getRowHeight}
                  onItemsRendered={onItemsRendered}
                  ref={mergeRefs(listRef, ref)}
                  width={width}
                >
                  {({
                    index, style,
                  }) => {
                    const { rowRef } = useListRow(index, setRowHeight);
                    if (!isItemLoaded(index)) {
                      return (
                        <div style={style}>
                          <div ref={rowRef}>
                            <Loading />
                          </div>
                        </div>
                      );
                    }
                    const item = itemsNew[index];
                    return (
                      <div style={style}>
                        <div ref={rowRef}>
                          <SingleProvider {...item} />
                          {index !== itemCount - 1 && <Divider />}
                        </div>
                      </div>
                    );
                  }}
                </List>
              )}
            </InfiniteLoader>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
