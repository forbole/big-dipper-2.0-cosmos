/* eslint-disable object-curly-newline */
import chainConfig from '@/chainConfig';
import { Divider, Typography } from '@mui/material';
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatToken } from '@/utils/format_token';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import useAppTranslation from '@/hooks/useAppTranslation';
import numeral from 'numeral';
import { memo } from 'react';
import useStyles from '@/screens/accounts/components/list/components/mobile/styles';
import { RowProps } from '@/screens/accounts/components/list/components/mobile/types';

const { primaryTokenUnit } = chainConfig();

const Row = memo(({ data, index, itemCount }: RowProps) => {
  const profile = useProfileRecoil(data.address);
  const token = formatToken(data.balance, primaryTokenUnit);
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  const isLast = itemCount ? index === itemCount - 1 : false;
  return (
    <div className={classes.list}>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('accounts:top_rank')}
        </Typography>
        <Typography variant="body1" className="value">
          {`#${data.rank}`}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('accounts:top_address')}
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
            {t('accounts:top_dtag')}
          </Typography>
          <Typography variant="body1" className="value">
            {profile.name}
          </Typography>
        </div>
      )}
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('accounts:top_balance')}
        </Typography>
        <Typography variant="body1" className="value">
          {numeral(token.value).format('0,0')} {token.displayDenom.toUpperCase()}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('accounts:top_percentage')}
        </Typography>
        <Typography variant="body1" className="value">
          {numeral(data.percentage).format('0,0.0000')} %
        </Typography>
      </div>
      {!isLast && <Divider />}
    </div>
  );
});

export default Row;
