import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgLinkApplication from '@models/desmos/msg/profiles/msg_link_application';
import { useProfileRecoil } from '@recoil/profiles';

const LinkApplication = (props: { message: MsgLinkApplication }) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgLinkApplication"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          username: message.linkData.username,
          application: message.linkData.application,
        }}
      />
    </Typography>
  );
};

export default LinkApplication;
