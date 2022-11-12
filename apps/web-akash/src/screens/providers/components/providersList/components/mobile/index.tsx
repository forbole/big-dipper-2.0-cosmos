import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { Typography, Divider } from '@material-ui/core';
import { VariableSizeList as List } from 'react-window';
import { useList, useListRow } from '@hooks';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import EmailIcon from 'shared-utils/assets/icon-email.svg';
import WebArrowIcon from 'shared-utils/assets/icon-web-arrow.svg';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import { useAddress } from '@utils/copy_to_clipboard';
import useTranslation from 'next-translate/useTranslation';
import { ProviderInfo } from '../../../../types';
import { useStyles } from './styles';
import { SingleProvider } from './component';

const Mobile: React.FC<{ list: ProviderInfo[] }> = ({ list }) => {
  const classes = useStyles();
  const { t } = useTranslation('providers');
  const { handleCopyToClipboard } = useAddress(t);
  const className = '';

  const { listRef, getRowHeight, setRowHeight } = useList();

  const itemsNew = list.map((eachProvider) => ({
    ownerAddress: (
      <>
        <Typography variant="body1" component="a">
          {getMiddleEllipsis(eachProvider.ownerAddress, {
            beginning: 20,
            ending: 5,
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
          {/* {getMiddleEllipsis(eachProvider.hostURI, {
            beginning: 30, ending: 0,
          })} */}
          {eachProvider.hostURI}
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
    <div className={classnames(className)}>
      <List
        height={900}
        itemCount={itemsNew.length}
        itemSize={getRowHeight}
        ref={listRef as React.LegacyRef<List>}
      >
        {({ index, style }) => {
          const { rowRef } = useListRow(index, setRowHeight);
          const selectedItem = itemsNew[index];
          return (
            <div style={style} className={index % 2 ? classes.even : ''}>
              <div ref={rowRef}>
                <SingleProvider {...selectedItem} />
                {index !== itemsNew.length - 1 && <Divider />}
              </div>
            </div>
          );
        }}
      </List>
    </div>
  );
};

export default Mobile;
