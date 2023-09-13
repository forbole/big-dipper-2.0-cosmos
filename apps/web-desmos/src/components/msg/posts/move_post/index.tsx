import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMovePost from '@/models/msg/posts/msg_move_post';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const MovePost: FC<{ message: MsgMovePost }> = (props) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);

  const authorMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgMovePost"
        components={[<Name address={message.owner} name={authorMoniker} />, <b />]}
        values={{
          owner: authorMoniker,
          post_id: message.post_id,
          subspace_id: message.subspace_id,
          target_subspace_id: message.target_subspace_id,
        }}
      />
    </Typography>
  );
};

export default MovePost;
