import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgRedelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { useChainContext } from '@contexts';
import {
  VALIDATOR_DETAILS, ACCOUNT_DETAILS,
} from '@utils/go_to_page';

const Redelegate = (props: {
  message: MsgRedelegate;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const parsedAmount = `${numeral(formatDenom(message.amount.amount)).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;
  const delegatorHref = delegator ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  const from = findAddress(message.validatorSrcAddress);
  const fromMoniker = from ? from?.moniker : message
    .validatorSrcAddress;
  const fromHref = from ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  const to = findAddress(message.validatorDstAddress);
  const toMoniker = to ? to?.moniker : message
    .validatorDstAddress;
  const toHref = to ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txRedelegateContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
              href={delegatorHref}
            />
          ),
          <b />,
          (
            <Name
              address={message.validatorSrcAddress}
              name={fromMoniker}
              href={fromHref}
            />
          ),
          (
            <Name
              address={message.validatorDstAddress}
              name={toMoniker}
              href={toHref}
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
