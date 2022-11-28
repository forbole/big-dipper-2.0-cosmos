import Name from '@/components/name';
import { MsgCreateVestingAccount } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const CreateVestingAccount: React.FC<{ message: MsgCreateVestingAccount }> = (props) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateVestingAccount"
        components={[<Name address={message.toAddress} name={toMoniker} />]}
      />
    </Typography>
  );
};

export default CreateVestingAccount;
