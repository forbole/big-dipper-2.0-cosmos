import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateUserGroup from '@/models/msg/subspaces/msg_create_user_group';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateUserGroup: FC<{ message: MsgCreateUserGroup }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);

  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgCreateUserGroup"
        components={[<Name address={message.creator} name={creatorMoniker} />, <b />]}
        values={{
          creator: creatorMoniker,
          name: message.name,
        }}
      />
    </Typography>
  );
};

export default CreateUserGroup;
