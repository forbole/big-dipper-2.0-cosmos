import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateClawbackVestingAccount from '@/models/msg/vesting/msg_create_clawback_vesting_account';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateClawbackVestingAccount: FC<{ message: MsgCreateClawbackVestingAccount }> = (props) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  return (
    <Typography>
      <AppTrans
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
