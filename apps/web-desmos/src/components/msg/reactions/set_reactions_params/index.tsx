import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSetReactionsParams from '@/models/msg/reactions/msg_set_reactions_params';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SetReactionsParams: FC<{ message: MsgSetReactionsParams }> = (props) => {
  const { message } = props;

  const user = useProfileRecoil(message.user);

  const userMoniker = user ? user?.name : message.user;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSetReactionsParams"
        components={[<Name address={message.user} name={userMoniker} />, <b />]}
        values={{
          user: userMoniker,
        }}
      />
    </Typography>
  );
};

export default SetReactionsParams;
