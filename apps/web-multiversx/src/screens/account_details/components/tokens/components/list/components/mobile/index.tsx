import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, Fragment } from 'react';
import AvatarName from '@/components/avatar_name';
import useStyles from '@/screens/account_details/components/tokens/components/list/components/mobile/styles';
import type { OtherTokenType } from '@/screens/account_details/components/tokens/types';
import { formatNumber } from '@/utils/format_token';
import { TOKEN_DETAILS } from '@/utils/go_to_page';

const Mobile: FC<{ className?: string; items: OtherTokenType[] }> = (props) => {
  const { t } = useAppTranslation('accounts');
  const { classes } = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    token: (
      <AvatarName address={x.identifier} name={x.name} imageUrl={x.imageUrl} href={TOKEN_DETAILS} />
    ),
    balance: `${formatNumber(
      x.balance.value,
      x.balance.exponent
    )} ${x.balance.displayDenom.toUpperCase()}`,
  }));

  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <div className={classes.root}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('token')}
              </Typography>
              {x.token}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('balance')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.balance}
              </Typography>
            </div>
          </div>
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
