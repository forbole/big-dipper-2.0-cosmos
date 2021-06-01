import React from 'react';
import numeral from 'numeral';
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
  ConditionExplanation,
} from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { useStyles } from './styles';
import {
  getStatusTheme, getCondition,
} from './utils';
import { OverviewType } from '../../types';

const Profile: React.FC<OverviewType & {
  className?: string;
}> = ({
  className, ...data
}) => {
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { isMobile } = useScreenSize();

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  const statusTheme = getStatusTheme(data.status, data.jailed);
  const condition = getCondition(data.condition, data.status);
  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = data;

  if (!pattern.test(data.website)) {
    website = `//${data.website}`;
  }

  const formattedItem = {
    operatorAddress: (
      <div className={classes.copyText}>
        <Typography variant="body1" className="value">
          {isMobile ? getMiddleEllipsis(
            data.operatorAddress,
            { beginning: 9 },
          ) : data.operatorAddress}
        </Typography>
        <CopyIcon onClick={() => handleCopyToClipboard(data.operatorAddress)} />
      </div>
    ),
    selfDelegateAddress: (
      <div className={classes.copyText}>
        <Link href={ACCOUNT_DETAILS(data.selfDelegateAddress)} passHref>
          <Typography variant="body1" className="value" component="a">
            {isMobile ? getMiddleEllipsis(
              data.selfDelegateAddress,
              { beginning: 9 },
            ) : data.selfDelegateAddress}
          </Typography>
        </Link>
        <CopyIcon onClick={() => handleCopyToClipboard(data.selfDelegateAddress)} />
      </div>
    ),
    website: (
      <Typography
        variant="body1"
        className="value"
        component="a"
        href={website}
        target="_blank"
        rel="noreferrer"
      >
        {data.website}
      </Typography>
    ),
    commission: (
      <Typography
        variant="body1"
        className="value"
      >
        {`${numeral(data.commission * 100).format('0.00')}%`}
      </Typography>
    ),
    condition: (
      data.status === 3 ? (
        <div className="condition__body">
          <InfoPopover
            content={(
              <>
                <Typography variant="body1">
                  {t('missedBlockCounter', {
                    amount: numeral(data.missedBlockCounter).format('0,0'),
                  })}
                </Typography>
                <Typography variant="body1">
                  {t('signedBlockWindow', {
                    amount: numeral(data.signedBlockWindow).format('0,0'),
                  })}
                </Typography>
              </>
            )}
            display={(
              <Typography
                variant="body1"
                className={classnames('value', condition)}
              >
                {t(condition)}
              </Typography>
        )}
          />
        </div>
      ) : (
        <Typography
          variant="body1"
          className={classnames('value', 'condition', condition)}
        >
          {t(condition)}
        </Typography>
      )
    ),
  };

  return (
    <Box className={classnames(className)}>
      <div className={classes.bio}>
        <Avatar
          address={data.operatorAddress}
          imageUrl={data.validator.imageUrl}
          className={classnames(classes.avatar, classes.desktopAvatar)}
        />
        <div>
          <div className="bio__header">
            {/* ======================== */}
            {/* mobile header */}
            {/* ======================== */}
            <div className={classes.header}>
              <Avatar
                address={data.operatorAddress}
                imageUrl={data.validator.imageUrl}
                className={classnames(classes.avatar, classes.mobile)}
              />
              <div className="header__content">
                <Typography variant="h2">
                  {data.validator.moniker}
                </Typography>
                <Tag
                  value={t(statusTheme.status)}
                  theme={statusTheme.theme as any}
                  className={classes.tag}
                />
              </div>
            </div>
          </div>
          {/* ======================== */}
          {/* bio */}
          {/* ======================== */}
          <div className="bio__content">
            <Markdown>
              {data.description}
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
              content={<ConditionExplanation />}
            />
          </Typography>
          {formattedItem.condition}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
