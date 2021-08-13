import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSwapExactAmountOut } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { chainConfig } from '@configs';

const SwapExactAmountOut = (props: {
    message: MsgSwapExactAmountOut;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
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
          amountOut: `${numeral(message.tokenOut?.amount / 10 ** chainConfig.tokenUnits[message.tokenOut?.denom]?.exponent).format('0,0.[0000]')} ${chainConfig.tokenUnits[message.tokenOut?.denom]?.display?.toUpperCase()}`,
          amountIn: message.routes.map((x) => {
            return `${numeral(parseFloat(message.tokenInMaxAmount) / 10 ** chainConfig.tokenUnits[x?.tokenOutDenom]?.exponent).format('0,0.[0000]')} ${chainConfig.tokenUnits[x?.tokenOutDenom]?.display?.toUpperCase()}`;
          }),
          poolIds: message.routes.map((x) => {
            return x?.poolId;
          }),
        }}
      />
    </Typography>
  );
};

export default SwapExactAmountOut;
