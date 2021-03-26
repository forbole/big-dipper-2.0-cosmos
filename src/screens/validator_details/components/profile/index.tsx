import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import CopyIcon from '@assets/icon-copy.svg';
import { useScreenSize } from '@hooks';
import {
  Box,
  Avatar,
  Tag,
} from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';

const Profile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { isMobile } = useScreenSize();

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  const bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et quam vestibulum, ullamcorper mauris ut, imperdiet quam. Donec sed fermentum ligula. Quisque et est sit amet augue cursus varius vitae in tortor.';

  const formattedItem = {
    operatorAddress: (
      <div className={classes.copyText}>
        <Link href={ACCOUNT_DETAILS('123')} passHref>
          <Typography variant="body1" className="value" component="a">
            {isMobile ? getMiddleEllipsis(
              'forb5u56XgvzxiKfRt4FVNFQKJrd2LWAfNCsCqL6P7q',
              { beginning: 9 },
            ) : 'forb5u56XgvzxiKfRt4FVNFQKJrd2LWAfNCsCqL6P7q'}
          </Typography>
        </Link>
        <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
      </div>
    ),
    selfDelegateAddress: (
      <div className={classes.copyText}>
        <Link href={ACCOUNT_DETAILS('123')} passHref>
          <Typography variant="body1" className="value" component="a">
            {isMobile ? getMiddleEllipsis(
              'forb5u56XgvzxiKfRt4FVNFQKJrd2LWAfNCsCqL6P7q',
              { beginning: 9 },
            ) : 'forb5u56XgvzxiKfRt4FVNFQKJrd2LWAfNCsCqL6P7q'}
          </Typography>
        </Link>
        <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
      </div>
    ),
    website: (
      <Typography
        variant="body1"
        className="value"
        component="a"
        href="https://www.forbole.com"
        target="_blank"
        rel="noreferrer"
      >
        https://www.forbole.com
      </Typography>
    ),
    commission: (
      <Typography
        variant="body1"
        className="value"
      >
        10%
      </Typography>
    ),
  };

  return (
    <Box className={classnames(className)}>
      <div className={classes.bio}>
        <Avatar
          address="Forbole"
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address="Forbole"
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  Forbole
                </Typography>
                <Tag value="Active" theme="one" className={classes.tag} />
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          <Typography variant="body1" className="bio__content">
            {bio}
          </Typography>
        </div>
      </div>

      <Divider className={classes.divider} />
      <div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('operatorAddress')}
          </Typography>
          {formattedItem.operatorAddress}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('selfDelegateAddress')}
          </Typography>
          {formattedItem.selfDelegateAddress}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('website')}
          </Typography>
          {formattedItem.website}
        </div>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('commission')}
          </Typography>
          {formattedItem.commission}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
