import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateSubspace from '@/models/msg/subspaces/msg_create_subspace';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateSubspace: FC<{ message: MsgCreateSubspace }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);

  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreateSubspace"
        components={[<Name address={message.creator} name={creatorMoniker} />, <b />]}
        values={{
          creator: creatorMoniker,
          description: message.description,
        }}
      />
    </Typography>
  );
};

export default CreateSubspace;
