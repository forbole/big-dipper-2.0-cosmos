import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinPool } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { chainConfig } from '@configs';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const JoinPool = (props: {
    message: MsgJoinPool;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountIn = message.tokenInMaxs.map((x) => {
    const amount = formatDenom(x.amount, x.denom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const amountOutFormatDenom = formatDenom(message.shareOutAmount, chainConfig?.primaryTokenUnit);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txJoinPoolContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          amountOut,
          amountIn,
          poolId: message.poolId,
        }}
      />
    </Typography>
  );
};

export default JoinPool;
