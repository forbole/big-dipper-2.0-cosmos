import Name from '@/components/name';
import MsgUnlinkApplication from '@/models/msg/profiles/msg_unlink_application';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';

const UnlinkApplication: FC<{ message: MsgUnlinkApplication }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
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
