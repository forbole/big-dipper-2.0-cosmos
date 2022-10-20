import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import {
  Box,
} from '@components';
import { getShardDisplay } from '@utils/get_shard_display';
import { useStyles } from './style';
import { OverviewType } from '../../types';

const Overview: React.FC<{overview: OverviewType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();
  const shard = getShardDisplay(props.overview.shard);

  const items = [
    {
      key: t('shard'),
      value: shard.key === 'metachain' ? t('common:metachain') : props.overview.shard,
    },
    {
      key: t('instances'),
      value: numeral(props.overview.instances).format('0,0'),
    },
    {
      key: t('type'),
      value: (
        <Typography>
          {props.overview.type.toUpperCase()}
          {' '}

          <span className="item__value--status">
            {props.overview.type === 'validator' ? (
              <>
                (
                {props.overview.status.toUpperCase()}
                )
              </>
            ) : (
              <>
                {props.overview.status.toUpperCase()}
              </>
            )}
          </span>
        </Typography>
      ),
    },
    {
      key: t('networkStatus'),
      value: props.overview.online ? t('online') : t('offline'),
    },
  ];

  return (
    <Box className={classnames(props.className)}>
      <Typography className={classes.title} variant="h2">{t('overview')}</Typography>
      <div className={classes.body}>
        {items.map((x) => {
          return (
            <div key={x.key} className={classes.item}>
              <div className={classes.hash}>
                <div className={classes.bullet} />
                <div>
                  <Typography variant="body1" className="item__key">
                    {x.key}
                  </Typography>
                  {React.isValidElement(x.value) ? (
                    <div>
                      {x.value}
                    </div>
                  ) : (
                    <Typography variant="body1">
                      {x.value}
                    </Typography>
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
