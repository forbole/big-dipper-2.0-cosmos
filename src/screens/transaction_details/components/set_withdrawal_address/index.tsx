import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSetWithdrawAddress } from '@models';
import { useChainContext } from '@contexts';

const SetWithdrawalAddress = (props: {
  message: MsgSetWithdrawAddress;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const delegator = findAddress(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.moniker : message
    .delegatorAddress;

  const withdrawal = findAddress(message.withdrawalAddress);
  const withdrawalMoniker = withdrawal ? withdrawal?.moniker : message.withdrawalAddress;

  return (
    <Typography>
      <Trans
        i18nKey="transactions:txsetRewardAddressContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
            />
          ),
          (
            <Name
              address={message.withdrawalAddress}
              name={withdrawalMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default SetWithdrawalAddress;
