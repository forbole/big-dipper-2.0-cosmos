import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditSection from '@/models/msg/subspaces/msg_edit_section';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditSection: FC<{ message: MsgEditSection }> = (props) => {
  const { message } = props;

  const editor = useProfileRecoil(message.editor);

  const editorMoniker = editor ? editor?.name : message.editor;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgEditSection"
        components={[<Name address={message.editor} name={editorMoniker} />, <b />]}
        values={{
          editor: editorMoniker,
        }}
      />
    </Typography>
  );
};

export default EditSection;
