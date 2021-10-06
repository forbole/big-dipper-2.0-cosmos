import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgUndelegate } from '@models';
import { useChainContext } from '@contexts';

const Undelegate = (props: {
  message: MsgUndelegate;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const amount = formatDenom(message.amount.amount, message.amount.denom);
  const parsedAmount = `${numeral(amount.value).format(amount.format)} ${amount.denom.toUpperCase()}`;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;

  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message
    .validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUndelegateContent"
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
              address={message.validatorAddress}
              name={validatorMoniker}
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
