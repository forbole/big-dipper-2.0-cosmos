import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgRedelegate } from '@models';
import { chainConfig } from '@configs';
import { useChainContext } from '@contexts';

const Redelegate = (props: {
  message: MsgRedelegate;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const parsedAmount = `${numeral(formatDenom(message.amount.amount)).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;

  const from = findAddress(message.validatorSrcAddress);
  const fromMoniker = from ? from?.moniker : message
    .validatorSrcAddress;

  const to = findAddress(message.validatorDstAddress);
  const toMoniker = to ? to?.moniker : message
    .validatorDstAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRedelegateContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.validatorSrcAddress}
              name={fromMoniker}
            />
          ),
          (
            <Name
              address={message.validatorDstAddress}
              name={toMoniker}
            />
          ),
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Redelegate;
