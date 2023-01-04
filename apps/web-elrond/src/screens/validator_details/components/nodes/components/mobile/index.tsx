import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getShardDisplay } from '@/utils/get_shard_display';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { NODE_DETAILS } from '@/utils/go_to_page';
import type { NodeType } from '@/screens/validator_details/components/nodes/types';
import { useStyles } from '@/screens/validator_details/components/nodes/components/mobile/styles';

const Mobile: FC<{ className?: string; items: NodeType[] }> = (props) => {
  const { t } = useTranslation('nodes');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    const shard = getShardDisplay(x.shard);
    return {
      key: x.pubkey,
      pubkey: (
        <Link href={NODE_DETAILS(x.pubkey)} passHref>
          <Typography variant="body1" className="value" component="a">
            {getMiddleEllipsis(x.pubkey, {
              beginning: 13,
              ending: 15,
            })}
          </Typography>
        </Link>
      ),
      name: x.name,
      version: x.version,
      status: x.status.toUpperCase(),
      online: x.online ? t('nodes:online') : t('nodes:offline'),
      shard: t(`common:${shard.key}`, {
        num: shard.num,
      }),
    };
  });
  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <div className={classes.wrapper}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('name')}
              </Typography>
              {x.name}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('pubkey')}
              </Typography>
              {x.pubkey}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('shard')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.shard}
              </Typography>
            </div>
            <div className={classes.flex}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('version')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.version}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('status')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.status}
                </Typography>
              </div>
            </div>
          </div>
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
