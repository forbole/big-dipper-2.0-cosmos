import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgSwapSend } from '@models';
import { useChainContext } from '@contexts';
import { chainConfig } from '@configs';

const SwapSend = (props: {
  message: MsgSwapSend;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const from = findAddress(message.fromAddress);
  const fromMoniker = from ? from?.moniker : message
    .fromAddress;

  const to = findAddress(message.toAddress);
  const toMoniker = to ? to?.moniker : message
    .fromAddress;

  const offerAmount = message.offerCoin.amount;
  const offerDenom = message.offerCoin.denom;
  const offer = formatDenom(offerAmount, offerDenom);

  const offerCoin = `${numeral(offer.value).format('0,0.[0000]')} ${offer.denom.toUpperCase()}`;
  const askDenom = chainConfig.tokenUnits[message.askDenom]?.display ?? message.askDenom;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSwapSend"
        components={[
          (
            <Name
              address={message.fromAddress}
              name={fromMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.toAddress}
              name={toMoniker}
            />
          ),
        ]}
        values={{
          offerCoin,
          askDenom,
        }}
      />
    </Typography>
  );
};

export default SwapSend;
