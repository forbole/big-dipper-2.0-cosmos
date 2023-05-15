import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgBlockUser } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const BlockUser: FC<{ message: MsgBlockUser }> = (props) => {
  const { message } = props;

  const blocker = useProfileRecoil(message.blocker);
  const blockerMoniker = blocker ? blocker?.name : message.blocker;

  const blocked = useProfileRecoil(message.blocked);
  const blockedMoniker = blocked ? blocked?.name : message.blocked;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txBlockUserContent"
        components={[
          <Name address={message.blocker} name={blockerMoniker} />,
          <Name address={message.blocked} name={blockedMoniker} />,
          <span style={{ wordBreak: 'break-all' }} />,
        ]}
        values={{
          subspace: message.subspace,
        }}
      />
    </Typography>
  );
};

export default BlockUser;
