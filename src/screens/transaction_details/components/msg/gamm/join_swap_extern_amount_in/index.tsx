import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinSwapExternAmountIn } from '@models';
import { useChainContext } from '@contexts';
import { chainConfig } from '@configs';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';

const JoinSwapExternAmountIn = (props: {
    message: MsgJoinSwapExternAmountIn;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountInFormat = formatDenom(message.tokenIn.amount, message.tokenIn.denom);
  const amountIn = `${numeral(amountInFormat.value).format('0,0.[0000]')} ${amountInFormat.denom.toUpperCase()}`;
  const amountOutFormatDenom = formatDenom(message.shareOutMinAmount,
    chainConfig?.primaryTokenUnit);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txJoinSwapExternAmountInContent"
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

export default JoinSwapExternAmountIn;
