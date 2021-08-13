import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinPool } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { chainConfig } from '@configs';

const JoinPool = (props: {
    message: MsgJoinPool;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
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
          amountOut: `${numeral(parseFloat(message.shareOutAmount) / (10 ** chainConfig.tokenUnits[chainConfig?.primaryTokenUnit]?.exponent)).format('0,0.[0000]')} ${chainConfig.tokenUnits[chainConfig?.primaryTokenUnit]?.display?.toUpperCase()}`,
          amountIn: message.tokenInMaxs.map((x) => {
            return `${numeral(parseFloat(x?.amount) / 10 ** chainConfig.tokenUnits[x?.denom]?.exponent).format('0,0.[0000]')} ${chainConfig.tokenUnits[x?.denom]?.display?.toUpperCase()}`;
          }),
          poolId: message.poolId,
        }}
      />
    </Typography>
  );
};

export default JoinPool;
