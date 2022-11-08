import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgCreateClawbackVestingAccount from '@models/evmos/msg/vesting/msg_create_clawback_vesting_account';
import { useProfileRecoil } from '@recoil/profiles';

const CreateClawbackVestingAccount = (props: { message: MsgCreateClawbackVestingAccount }) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateClawbackVestingAccount"
        components={[
          <Name address={message.fromAddress} name={fromMoniker} />,
          <Name address={message.toAddress} name={toMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default CreateClawbackVestingAccount;
