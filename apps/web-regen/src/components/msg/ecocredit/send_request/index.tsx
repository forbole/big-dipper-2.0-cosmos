import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSendRequest from '@/models/msg/ecocredit/msg_send_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SendRequest: FC<{ message: MsgSendRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <AppTrans
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
