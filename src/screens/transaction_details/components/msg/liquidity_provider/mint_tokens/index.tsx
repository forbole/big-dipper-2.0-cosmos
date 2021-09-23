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
  const amount = formatDenom(message.amount.amount, message.amount.denom);

  return (
    <Typography>
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
        //   amount: message.amount,
          amount: `${numeral(amount.value).format('0,0.[000000]')} ${amount.denom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default MintTokens;
