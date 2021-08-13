import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinSwapShareAmountOut } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const JoinSwapShareAmountOut = (props: {
    message: MsgJoinSwapShareAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountOut = message.shareOutAmount.map((x) => {
    const amount = formatDenom(x.amount, x.denom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);
  const amountInFormatDenom = formatDenom(message.tokenInMaxAmount, message.tokenInDenom);
  const amountIn = `${numeral(amountInFormatDenom.value).format('0,0.[0000]')} ${amountInFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txJoinSwapShareAmountOutContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          poolId: message.poolId,
          amountIn,
          amountOut,
        }}
      />
    </Typography>
  );
};

export default JoinSwapShareAmountOut;
