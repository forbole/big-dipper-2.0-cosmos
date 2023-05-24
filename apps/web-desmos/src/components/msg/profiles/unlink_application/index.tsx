import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUnlinkApplication from '@/models/msg/profiles/msg_unlink_application';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UnlinkApplication: FC<{ message: MsgUnlinkApplication }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgUnlinkApplication"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          application: message.application,
          username: message.username,
        }}
      />
    </Typography>
  );
};

export default UnlinkApplication;
