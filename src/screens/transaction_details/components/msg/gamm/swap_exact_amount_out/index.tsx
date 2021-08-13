import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSwapExactAmountOut } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const SwapExactAmountOut = (props: {
    message: MsgSwapExactAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountIn = message.routes.map((x) => {
    const amount = formatDenom(message.tokenInMaxAmount, x.tokenOutDenom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);
  const amountOutFormatDenom = formatDenom(message.tokenOut?.amount, message.tokenOut?.denom);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSwapExactAmountOutContent"
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
          poolIds: message.routes.map((x) => {
            return x?.poolId;
          }),
        }}
      />
    </Typography>
  );
};

export default SwapExactAmountOut;
