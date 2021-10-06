import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgSwap } from '@models';
import { useChainContext } from '@contexts';
import { chainConfig } from '@configs';

const Swap = (props: {
  message: MsgSwap;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const trader = findAddress(message.trader);
  const traderMoniker = trader ? trader?.moniker : message
    .trader;

  const offerAmount = message.offerCoin.amount;
  const offerDenom = message.offerCoin.denom;
  const offer = formatDenom(offerAmount, offerDenom);

  const offerCoin = `${numeral(offer.value).format('0,0.[0000]')} ${offer.denom.toUpperCase()}`;
  const askDenom = chainConfig.tokenUnits[message.askDenom]?.display ?? message.askDenom;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSwap"
        components={[
          (
            <Name
              address={message.trader}
              name={traderMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          offerCoin,
          askDenom,
        }}
      />
    </Typography>
  );
};

export default Swap;
