import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from 'ui/components/name';
import MsgUnlinkApplication from '@models/desmos/msg/profiles/msg_unlink_application';
import { useProfileRecoil } from '@recoil/profiles';

const UnlinkApplication = (props: { message: MsgUnlinkApplication }) => {
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
