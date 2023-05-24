import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateSection from '@/models/msg/subspaces/msg_create_section';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateSection: FC<{ message: MsgCreateSection }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);

  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreateSection"
        components={[<Name address={message.creator} name={creatorMoniker} />, <b />]}
        values={{
          creator: creatorMoniker,
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default CreateSection;
