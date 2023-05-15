import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRemoveReaction from '@/models/msg/reactions/msg_remove_reaction';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RemoveReaction: FC<{ message: MsgRemoveReaction }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.user);

  const userMoniker = user ? user?.name : message.user;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRemoveReaction"
        components={[<Name address={message.user} name={userMoniker} />, <b />]}
        values={{
          user: userMoniker,
        }}
      />
    </Typography>
  );
};

export default RemoveReaction;
