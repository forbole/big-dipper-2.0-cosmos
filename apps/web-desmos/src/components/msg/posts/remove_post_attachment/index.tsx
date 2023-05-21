import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRemovePostAttachment from '@/models/msg/posts/msg_remove_post_attachment';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RemovePostAttachment: FC<{ message: MsgRemovePostAttachment }> = (props) => {
  const { message } = props;

  const editor = useProfileRecoil(message.editor);

  const editorMoniker = editor ? editor?.name : message.editor;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRemovePostAttachment"
        components={[<Name address={message.editor} name={editorMoniker} />, <b />]}
        values={{ editor: editorMoniker }}
      />
    </Typography>
  );
};

export default RemovePostAttachment;
