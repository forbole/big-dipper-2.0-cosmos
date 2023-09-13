import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCancelPostOwnerTransferRequest from '@/models/msg/posts/msg_cancel_post_owner_transfer_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CancelPostOwnerTransferRequest: FC<{ message: MsgCancelPostOwnerTransferRequest }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCancelPostOwnerTransferRequest"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          sender: senderMoniker,
          post_id: message.post_id,
          subspace_id: message.subspace_id,
        }}
      />
    </Typography>
  );
};

export default CancelPostOwnerTransferRequest;
