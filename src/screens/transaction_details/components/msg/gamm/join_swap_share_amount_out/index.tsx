import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinSwapShareAmountOut } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import { chainConfig } from '@configs';

const JoinSwapShareAmountOut = (props: {
    message: MsgJoinSwapShareAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountOutFormatDenom = formatDenom(message.shareOutAmount, chainConfig.primaryTokenUnit);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;
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
