import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRemoveRegisteredReaction from '@/models/msg/reactions/msg_remove_registered_reaction';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RemoveRegisteredReaction: FC<{ message: MsgRemoveRegisteredReaction }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.user);

  const userMoniker = user ? user?.name : message.user;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRemoveRegisteredReaction"
        components={[<Name address={message.user} name={userMoniker} />, <b />]}
        values={{
          user: userMoniker,
        }}
      />
    </Typography>
  );
};

export default RemoveRegisteredReaction;
