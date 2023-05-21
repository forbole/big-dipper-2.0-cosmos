import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgCreatePeriodicVestingAccount } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreatePeriodicVestingAccount: FC<{ message: MsgCreatePeriodicVestingAccount }> = (props) => {
  const { message } = props;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgCreatePeriodicVestingAccount"
        components={[<Name address={message.toAddress} name={toMoniker} />]}
      />
    </Typography>
  );
};

export default CreatePeriodicVestingAccount;
