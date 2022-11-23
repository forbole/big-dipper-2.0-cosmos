import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgSendRequest from '@/models/msg/ecocredit/msg_send_request';
import { useProfileRecoil } from '@/recoil/profiles';

const SendRequest: React.FC<{ message: MsgSendRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgSendRequest"
        components={[
          <Name address={message.sender} name={senderMoniker} />,
          <Name address={message.recipient} name={recipientMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default SendRequest;
