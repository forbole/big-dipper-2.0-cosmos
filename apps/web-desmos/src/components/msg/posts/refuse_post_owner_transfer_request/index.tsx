import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRefusePostOwnerTransferRequest from '@/models/msg/posts/msg_refuse_post_owner_transfer_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RefusePostOwnerTransferRequest: FC<{ message: MsgRefusePostOwnerTransferRequest }> = (props) => {
  const { message } = props;

  const receiver = useProfileRecoil(message.receiver);

  const receiverMoniker = receiver ? receiver?.name : message.receiver;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRefusePostOwnerTransferRequest"
        components={[<Name address={message.receiver} name={receiverMoniker} />, <b />]}
        values={{
          receiver: receiverMoniker,
          post_id: message.post_id,
          subspace_id: message.subspace_id
        }}
      />
    </Typography>
  );
};

export default RefusePostOwnerTransferRequest;
