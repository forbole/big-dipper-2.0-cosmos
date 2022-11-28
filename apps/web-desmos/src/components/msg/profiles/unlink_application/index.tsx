import Name from '@/components/name';
import MsgUnlinkApplication from '@/models/msg/profiles/msg_unlink_application';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const UnlinkApplication: React.FC<{ message: MsgUnlinkApplication }> = (props) => {
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
