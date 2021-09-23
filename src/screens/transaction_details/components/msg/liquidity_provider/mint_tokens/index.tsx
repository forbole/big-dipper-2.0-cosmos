import React from 'react';
import Trans from 'next-translate/Trans';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgMintTokens } from '@models';
import { useChainContext } from '@contexts';

const MintTokens = (props: {
  message: MsgMintTokens;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const liquidityProvider = findAddress(message.liquidityProvider);
  const liqdPvdMoniker = liquidityProvider ? liquidityProvider?.moniker : message.liquidityProvider;

  const amountBeforeParse = message.amount;
  const parsedAmount = amountBeforeParse.map((x) => {
    const eachAmount = formatDenom(x.amount, x.denom);
    return `${numeral(eachAmount.value).format('0,0.[000000]')} ${eachAmount.denom.toUpperCase()}`;
  });

  return (
    <Typography>
      {
        parsedAmount.map((x) => {
          return (
            <Trans
              i18nKey="message_contents:txMintTokens"
              components={[
                (
                  <Name
                    address={message.liquidityProvider}
                    name={liqdPvdMoniker}
                  />
                ),
                <b />,
                <b />,
                <b />,
              ]}
              values={{
                amount: x,
              }}
            />
          );
        })
      }
    </Typography>
  );
};

export default MintTokens;
