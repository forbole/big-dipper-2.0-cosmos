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
  InfoPopover,
  Markdown,
} from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import { useAccountContext } from '../../contexts/account';
import { getStatusTheme } from './utils';

const Profile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { isMobile } = useScreenSize();
  const { uiData } = useAccountContext();

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  const statusTheme = getStatusTheme(uiData.profile.status);

  const formattedItem = {
    operatorAddress: (
      <Typography variant="body1" className="value">
        {isMobile ? getMiddleEllipsis(
          uiData.profile.operatorAddress,
          { beginning: 9 },
        ) : uiData.profile.operatorAddress}
      </Typography>
    ),
    selfDelegateAddress: (
      <div className={classes.copyText}>
        <Link href={ACCOUNT_DETAILS(uiData.profile.selfDelegateAddress)} passHref>
          <Typography variant="body1" className="value" component="a">
            {isMobile ? getMiddleEllipsis(
              uiData.profile.selfDelegateAddress,
              { beginning: 9 },
            ) : uiData.profile.selfDelegateAddress}
          </Typography>
        </Link>
        <CopyIcon onClick={() => handleCopyToClipboard(uiData.profile.selfDelegateAddress)} />
      </div>
    ),
    website: (
      <Typography
        variant="body1"
        className="value"
        component="a"
        href={uiData.profile.website}
        target="_blank"
        rel="noreferrer"
      >
        {uiData.profile.website}
      </Typography>
    ),
    commission: (
      <Typography
        variant="body1"
        className="value"
      >
        {uiData.profile.commission}
      </Typography>
    ),
    condition: (
      <Typography
        variant="body1"
        className={classnames('value', uiData.profile.condition)}
      >
        {t(uiData.profile.condition)}
      </Typography>
    ),
  };

  return (
    <Box className={classnames(className)}>
      <div className={classes.bio}>
        <Avatar
          address={uiData.profile.operatorAddress}
          imageUrl={uiData.profile.validator.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={uiData.profile.operatorAddress}
                imageUrl={uiData.profile.validator.imageUrl}
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  {uiData.profile.validator.moniker}
                </Typography>
                <Tag value={t(uiData.profile.status)} theme={statusTheme} className={classes.tag} />
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          <div className="bio__content">
            <Markdown>
              {uiData.profile.description}
            </Markdown>
          </div>
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
        <div className={classes.item}>
          <Typography variant="h4" className="label condition">
            {t('condition')}
            <InfoPopover
              content={t('conditionExplanation')}
            />
          </Typography>
          {formattedItem.condition}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
