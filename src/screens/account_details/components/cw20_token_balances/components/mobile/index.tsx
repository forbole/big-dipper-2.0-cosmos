import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { formatNumber } from '@utils/format_token';
import { Cw20TokenBalance } from '@src/screens/account_details/types';
import { getMiddleEllipsis } from '@src/utils/get_middle_ellipsis';
import { TOKEN_DETAILS } from '@src/utils/go_to_page';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  balances?: Cw20TokenBalance[]
}> = ({
  className,
  balances,
}) => {
  const classes = useStyles();
  const { t } = useTranslation('accounts');

  return (
    <div className={classnames(className)}>
      {balances.map((b, i) => {
        return (
          <React.Fragment key={`votes-mobile-${i}`}>
            <div className={classes.list}>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('token')}
                </Typography>
                <AvatarName
                  name={`${b.name} (${b.denom.toUpperCase()})`}
                  address={b.tokenAddress}
                  imageUrl={b.logo}
                  href={TOKEN_DETAILS}
                />
              </div>
              <div className={classes.flex}>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('balance')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {formatNumber(b.balance.toString(), b.exponent)}
                    {' '}
                    {b.denom.toUpperCase()}
                  </Typography>
                </div>
              </div>
              <div className={classes.flex}>
                <div className={classes.item}>
                  <Typography variant="h4" className="label">
                    {t('address')}
                  </Typography>
                  <Typography variant="body1" className="value">
                    {getMiddleEllipsis(b.tokenAddress, {
                      beginning: 15, ending: 10,
                    })}
                  </Typography>
                </div>
              </div>
            </div>
            {i !== balances.length - 1 && <Divider />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
