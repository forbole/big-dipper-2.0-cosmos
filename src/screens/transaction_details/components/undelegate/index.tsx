import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgUndelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { useChainContext } from '@contexts';
import {
  VALIDATOR_DETAILS, ACCOUNT_DETAILS,
} from '@utils/go_to_page';

const Undelegate = (props: {
  message: MsgUndelegate;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const parsedAmount = `${numeral(formatDenom(message.amount.amount)).format('0,0.[0000]')} ${chainConfig.display.toUpperCase()}`;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;
  const delegatorHref = delegator ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message
    .validatorAddress;
  const validatorHref = validator ? VALIDATOR_DETAILS : ACCOUNT_DETAILS;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txUndelegateContent"
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
              address={message.validatorAddress}
              name={validatorMoniker}
              href={validatorHref}
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

export default Undelegate;
