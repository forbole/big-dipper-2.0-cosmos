import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { Typography, Divider } from '@material-ui/core';
import AvatarName from '@components/avatar_name';
import { TOKEN_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { TokenType } from '../../../../types';

const Mobile: React.FC<{ items: TokenType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('tokens');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return {
      token: (
        <AvatarName
          imageUrl={x.imageUrl}
          name={x.name}
          address={x.identifier}
          href={TOKEN_DETAILS}
        />
      ),
      identifier: x.identifier,
      owner: (
        <AvatarName
          name={getMiddleEllipsis(x.owner, {
            beginning: 13,
            ending: 15,
          })}
          address={x.owner}
        />
      ),
      transactions: numeral(x.transactions).format('0,0'),
      accounts: numeral(x.accounts).format('0,0'),
    };
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
                  {t('identifier')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.identifier}
                </Typography>
              </div>

              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('accounts')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.accounts}
                </Typography>
              </div>

              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('transactions')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.transactions}
                </Typography>
              </div>

              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('owner')}
                </Typography>
                {x.owner}
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
