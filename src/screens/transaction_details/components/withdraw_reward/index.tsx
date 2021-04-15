import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdrawDelegatorReward } from '@models';
import { useChainContext } from '@contexts';

const WithdrawReward = (props: {
  message: MsgWithdrawDelegatorReward;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message.delegatorAddress;

  const validator = findAddress(message.validatorAddress);
  const validatorMoniker = validator ? validator?.moniker : message
    .validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txWithdrawRewardContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
            />
          ),
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default WithdrawReward;
