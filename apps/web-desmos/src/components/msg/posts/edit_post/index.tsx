import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditPost from '@/models/msg/posts/msg_edit_post';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditPost: FC<{ message: MsgEditPost }> = (props) => {
  const { message } = props;

  const author = useProfileRecoil(message.editor);

  const editorMoniker = author ? author?.name : message.editor;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgEditPost"
        components={[<Name address={message.editor} name={editorMoniker} />, <b />]}
        values={{
          editor: editorMoniker,
        }}
      />
    </Typography>
  );
};

export default EditPost;
