import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Box from 'ui/components/box';
import { formatNumber } from 'ui/utils/format_token';
import { getShardDisplay } from '@utils/get_shard_display';
import { useStyles } from './styles';
import type { OverviewType } from '../../types';

const Overview: React.FC<{ overview: OverviewType } & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const shard = getShardDisplay(props.overview.shard);

  const items = [
    {
      key: t('balance'),
      value: `${formatNumber(
        props.overview.balance.value,
        props.overview.balance.exponent
      )} ${props.overview.balance.displayDenom.toUpperCase()}`,
    },
    {
      key: t('developerReward'),
      value: `${formatNumber(
        props.overview.developerReward.value,
        props.overview.developerReward.exponent
      )} ${props.overview.developerReward.displayDenom.toUpperCase()}`,
    },
    {
      key: t('shard'),
      value: shard.key === 'metachain' ? t('common:metachain') : props.overview.shard,
    },
    {
      key: t('tokens'),
      value: numeral(props.overview.tokenCount).format('0,0'),
    },
  ];

  return (
    <Box className={classnames(props.className)}>
      <Typography className={classes.title} variant="h2">
        {t('overview')}
      </Typography>
      <div className={classes.body}>
        {items?.map((x) => {
          return (
            <div key={x.key} className={classes.item}>
              <div className={classes.hash}>
                <div className={classes.bullet} />
                <div>
                  <Typography variant="body1" className="item__key">
                    {x.key}
                  </Typography>
                  {React.isValidElement(x.value) ? (
                    <div>{x.value}</div>
                  ) : (
                    <Typography variant="body1">{x.value}</Typography>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default Overview;
