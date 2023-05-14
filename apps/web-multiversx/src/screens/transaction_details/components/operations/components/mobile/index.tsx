import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import AvatarName from '@/components/avatar_name';
import useStyles from '@/screens/transaction_details/components/operations/components/mobile/styles';
import type { OperationType } from '@/screens/transaction_details/types';
import { formatNumber } from '@/utils/format_token';
import { NFT_DETAILS, TOKEN_DETAILS } from '@/utils/go_to_page';

const Mobile: FC<{ className?: string; items: OperationType[] }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();
  const formattedItems = props.items.map((x, i) => {
    const isToken = x?.identifier ?? ''.split('-').length === 2;
    const isNft = x?.identifier ?? ''.split('-').length === 3;
    let link;
    if (isToken) {
      link = TOKEN_DETAILS;
    }
    if (isNft) {
      link = NFT_DETAILS;
    }

    return {
      key: `${x.identifier}-${i}}`,
      action: x.action.replace(/([A-Z])/g, ' $1').toUpperCase(),
      identifier: x.identifier,
      sender: <AvatarName address={x.sender} name={x.sender} />,
      receiver: <AvatarName address={x.receiver} name={x.receiver} />,
      value: link ? (
        <div>
          <Typography component="span">{formatNumber(x.value.value, x.value.exponent)} </Typography>
          <Link shallow prefetch={false} href={link(x.identifier)}>
            {x.value.displayDenom.toUpperCase()}
          </Link>
        </div>
      ) : (
        <Typography>
          {formatNumber(x.value.value, x.value.exponent)} {x.value.displayDenom.toUpperCase()}
        </Typography>
      ),
    };
  });

  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <div className={classes.root}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('action')}
              </Typography>
              {x.action}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('sender')}
              </Typography>
              {x.sender}
            </div>

            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('receiver')}
              </Typography>
              {x.receiver}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('value')}
              </Typography>
              {x.value}
            </div>
          </div>
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
