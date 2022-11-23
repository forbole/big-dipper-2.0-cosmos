import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgCreatePeriodicVestingAccount from '@/models/msg/vesting/msg_create_periodic_vesting_account';
import { useProfileRecoil } from '@/recoil/profiles';

const CreatePeriodicVestingAccount: React.FC<{ message: MsgCreatePeriodicVestingAccount }> = (
  props
) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreatePeriodicVestingAccount"
        components={[<Name address={message.toAddress} name={toMoniker} />]}
      />
    </Typography>
  );
};

export default CreatePeriodicVestingAccount;
