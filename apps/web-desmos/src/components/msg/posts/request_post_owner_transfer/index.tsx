import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRequestPostOwnerTransfer from '@/models/msg/posts/msg_request_post_owner_transfer';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RequestPostOwnerTransfer: FC<{ message: MsgRequestPostOwnerTransfer }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const receiver = useProfileRecoil(message.receiver);


  const senderMoniker = sender ? sender?.name : message.sender;
  const receiverMoniker = receiver ? receiver?.name : message.receiver;


  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRequestPostOwnerTransfer"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />,<Name address={message.receiver} name={receiverMoniker} />, <b />]}
        values={{
          sender: senderMoniker,
          receiver: receiverMoniker,
          post_id: message.post_id,
          subspace_id: message.subspace_id,
        }}
      />
    </Typography>
  );
};

export default RequestPostOwnerTransfer;
