import Name from '@/components/name';
import { MsgSetWithdrawAddress } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const SetWithdrawalAddress: FC<{ message: MsgSetWithdrawAddress }> = (props) => {
  const { message } = props;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const withdrawal = useProfileRecoil(message.withdrawalAddress);
  const withdrawalMoniker = withdrawal ? withdrawal?.name : message.withdrawalAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txsetRewardAddressContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <Name address={message.withdrawalAddress} name={withdrawalMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default SetWithdrawalAddress;
