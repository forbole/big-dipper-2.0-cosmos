/* eslint-disable max-len */
import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgLockTokens } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { secondsToDays } from '@utils/time';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const LockTokens = (props: {
    message: MsgLockTokens;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;
  const lockAmount = message.coins.map((x) => {
    const amount = formatDenom(x.amount, x.denom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txLockTokensContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
        ]}
        values={{
          amount: lockAmount,
          duration: secondsToDays(parseFloat(message.duration.substring(0, message.duration.length - 1))).toFixed(0),
        }}
      />
    </Typography>
  );
};

export default LockTokens;
