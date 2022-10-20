import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { formatNumber } from '@utils/format_token';
import {
  Typography, Divider,
} from '@material-ui/core';
import { AvatarName } from '@components';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { OtherTokenType } from '../../../../types';

const Mobile: React.FC<{items: OtherTokenType[]} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return ({
      identifier: x.identifier,
      token: (
        <AvatarName
          address={x.identifier}
          name={x.name}
          imageUrl={x.imageUrl}
          href={TOKEN_DETAILS}
        />
      ),
      balance: `${formatNumber(x.balance.value, x.balance.exponent)} ${x.balance.displayDenom.toUpperCase()}`,
    });
  });

  return (
    <div className={props.className}>
      {formattedItems.map((x, i) => {
        return (
          <React.Fragment key={`${x.identifier}-${i}`}>
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
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
