import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgExitSwapExternAmountOut } from '@models';
import { useChainContext } from '@contexts';
import { chainConfig } from '@configs';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const ExitSwapExternAmountOut = (props: {
    message: MsgExitSwapExternAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountOutFormatDenom = formatDenom(message.tokenOut.amount, message.tokenOut.denom);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;
  const amountInFormatDenom = formatDenom(message.shareInMaxAmount, chainConfig?.primaryTokenUnit);
  const amountIn = `${numeral(amountInFormatDenom.value).format('0,0.[0000]')} ${amountInFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txExitSwapExternAmountOutContent"
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

export default ExitSwapExternAmountOut;
