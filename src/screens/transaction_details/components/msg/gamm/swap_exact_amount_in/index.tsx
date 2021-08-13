import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSwapExactAmountIn } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const SwapExactAmountIn = (props: {
    message: MsgSwapExactAmountIn;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountOut = message.routes.map((x) => {
    const amount = formatDenom(message.tokenOutMinAmount, x?.tokenOutDenom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);
  const amountInFormatDenom = formatDenom(message.tokenIn?.amount, message.tokenIn?.denom);
  const amountIn = `${numeral(amountInFormatDenom.value).format('0,0.[0000]')} ${amountInFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSwapExactAmountInContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          amountIn,
          amountOut,
          poolIds: message.routes.map((x) => {
            return x?.poolId;
          }),
        }}
      />
    </Typography>
  );
};

export default SwapExactAmountIn;
