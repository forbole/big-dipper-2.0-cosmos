import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import dayjs, { formatDayJs } from '@utils/dayjs';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import { useSettingsContext } from '@contexts';
import useTranslation from 'next-translate/useTranslation';
import {
  Box,
  Avatar,
  Tag,
  InfoPopover,
  Markdown,
  ConditionExplanation,
} from '@components';
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
  const { dateFormat } = useSettingsContext();
  const classes = useStyles();
  const { t } = useTranslation('validators');

  const statusTheme = getStatusTheme(data.status, data.jailed);
  const condition = getCondition(data.condition, data.status);
  const pattern = /^((http|https|ftp):\/\/)/;
  let { website } = data;

  if (!pattern.test(data.website)) {
    website = `//${data.website}`;
  }

  const formattedItem = {
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
    lastSeen: (
      <Typography
        variant="body1"
        className="value"
      >
        {data.lastSeen ? formatDayJs(dayjs.utc(data.lastSeen), dateFormat) : t('na')}
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
          {data.description && (
            <div className="bio__content">
              <Markdown markdown={data.description} />
            </div>
          )}
        </div>
      </div>

      <Divider className={classes.divider} />
      <div>
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
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('lastSeen')}
          </Typography>
          {formattedItem.lastSeen}
        </div>
      </div>
    </Box>
  );
};

export default Profile;
