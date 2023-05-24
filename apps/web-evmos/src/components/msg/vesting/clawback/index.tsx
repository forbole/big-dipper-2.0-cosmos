import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgClawback from '@/models/msg/vesting/msg_clawback';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Clawback: FC<{ message: MsgClawback }> = (props) => {
  const { message } = props;

  const account = useProfileRecoil(message.accountAddress);
  const accountMoniker = account ? account?.name : message.accountAddress;

  const dest = useProfileRecoil(message.destAddress);
  const destMoniker = dest ? dest?.name : message.destAddress;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgClawback"
        components={[
          <Name address={message.accountAddress} name={accountMoniker} />,
          <Name address={message.destAddress} name={destMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default Clawback;
