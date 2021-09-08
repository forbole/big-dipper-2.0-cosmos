import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSwapExactAmountOut } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const SwapExactAmountOut = (props: {
    message: MsgSwapExactAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountInFormatDenom = formatDenom(message.tokenInMaxAmount, message.routes?.tokenInDenom);
  const amountIn = `${numeral(amountInFormatDenom.value).format('0,0.[0000]')} ${amountInFormatDenom.denom.toUpperCase()}`;
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
          poolIds: message.routes?.poolId,
        }}
      />
    </Typography>
  );
};

export default SwapExactAmountOut;
