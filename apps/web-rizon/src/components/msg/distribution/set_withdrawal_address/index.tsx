import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSetWithdrawAddress } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const SetWithdrawalAddress = (props: {
  message: MsgSetWithdrawAddress;
}) => {
  const { message } = props;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message
    .delegatorAddress;

  const withdrawal = useProfileRecoil(message.withdrawalAddress);
  const withdrawalMoniker = withdrawal ? withdrawal?.name : message.withdrawalAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txsetRewardAddressContent"
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
