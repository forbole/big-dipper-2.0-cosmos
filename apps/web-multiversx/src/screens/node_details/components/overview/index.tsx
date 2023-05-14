import { FC, isValidElement } from 'react';
import numeral from 'numeral';
import useAppTranslation from '@/hooks/useAppTranslation';
import Typography from '@mui/material/Typography';
import Box from '@/components/box';
import { getShardDisplay } from '@/utils/get_shard_display';
import useStyles from '@/screens/node_details/components/overview/styles';
import type { OverviewType } from '@/screens/node_details/types';

const Overview: FC<{ className?: string; overview: OverviewType }> = (props) => {
  const { t } = useAppTranslation('nodes');
  const { classes } = useStyles();
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
          {props.overview.type.toUpperCase()}{' '}
          <span className="item__value--status">
            {props.overview.type === 'validator' ? (
              <>({props.overview.status.toUpperCase()})</>
            ) : (
              <>{props.overview.status.toUpperCase()}</>
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
    <Box className={props.className}>
      <Typography className={classes.title} variant="h2">
        {t('overview')}
      </Typography>
      <div className={classes.body}>
        {items?.map((x) => (
          <div key={x.key} className={classes.item}>
            <div className={classes.hash}>
              <div className={classes.bullet} />
              <div>
                <Typography variant="body1" className="item__key">
                  {x.key}
                </Typography>
                {isValidElement(x.value) ? (
                  <div>{x.value}</div>
                ) : (
                  <Typography variant="body1">{x.value}</Typography>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Overview;
