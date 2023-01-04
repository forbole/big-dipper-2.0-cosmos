/* eslint-disable object-curly-newline */
import { chainConfig } from '@configs';
import { Divider, Typography } from '@material-ui/core';
import AvatarName from '@src/components/avatar_name';
import { useProfileRecoil } from '@src/recoil/profiles/hooks';
import { formatToken } from '@src/utils/format_token';
import { ACCOUNT_DETAILS } from '@src/utils/go_to_page';
import Big from 'big.js';
import useTranslation from 'next-translate/useTranslation';
import { memo } from 'react';
import { useStyles } from '../styles';
import { RowProps } from '../types';

const { primaryTokenUnit } = chainConfig;

export const Row = memo(({ data, index, itemCount }: RowProps) => {
  const profile = useProfileRecoil(data.address);
  const token = formatToken(data.balance, primaryTokenUnit);
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const isLast = index === itemCount - 1;
  return (
    <div className={classes.list}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('top_rank')}
        </Typography>
        <Typography variant="body1" className="value">
          {`#${data.rank}`}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('top_address')}
        </Typography>
        <Typography variant="body1" className="value">
          <AvatarName
            name={profile.name}
            address={data.address}
            imageUrl={profile.imageUrl}
            href={ACCOUNT_DETAILS}
          />
        </Typography>
      </div>
      {/^@/.test(profile.name) && (
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('top_dtag')}
          </Typography>
          <Typography variant="body1" className="value">
            {profile.name}
          </Typography>
        </div>
      )}
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('top_balance')}
        </Typography>
        <Typography variant="body1" className="value">
          {Big(token.value).toFixed(0)}
          {' '}
          {token.displayDenom.toUpperCase()}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('top_percentage')}
        </Typography>
        <Typography variant="body1" className="value">
          {`${data.percentage.toFixed(4)} %`}
        </Typography>
      </div>
      {!isLast && <Divider />}
    </div>
  );
});
