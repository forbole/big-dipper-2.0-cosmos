import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgAddRegisteredReaction from '@/models/msg/reactions/msg_add_registered_reaction';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const AddRegisteredReaction: FC<{ message: MsgAddRegisteredReaction }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.user);

  const userMoniker = user ? user?.name : message.user;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgAddRegisteredReaction"
        components={[<Name address={message.user} name={userMoniker} />, <b />]}
        values={{
          user: userMoniker,
          displayValue: message.displayValue,
        }}
      />
    </Typography>
  );
};

export default AddRegisteredReaction;
