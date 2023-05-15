import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreatePost from '@/models/msg/posts/msg_create_post';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreatePost: FC<{ message: MsgCreatePost }> = (props) => {
  const { message } = props;

  const author = useProfileRecoil(message.author);

  const authorMoniker = author ? author?.name : message.author;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreatePost"
        components={[<Name address={message.author} name={authorMoniker} />, <b />]}
        values={{
          author: authorMoniker,
        }}
      />
    </Typography>
  );
};

export default CreatePost;
