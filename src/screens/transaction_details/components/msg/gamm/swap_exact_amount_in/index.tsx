import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSwapExactAmountIn } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const SwapExactAmountIn = (props: {
    message: MsgSwapExactAmountIn;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountOutFormatDenom = formatDenom(message.tokenOutMinAmount,
    message.routes?.tokenOutDenom);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;
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
          poolIds: message.routes?.poolId,
        }}
      />
    </Typography>
  );
};

export default SwapExactAmountIn;
