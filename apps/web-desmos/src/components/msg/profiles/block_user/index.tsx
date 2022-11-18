import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgBlockUser from '@models/desmos/msg/profiles/msg_block_user';
import { useProfileRecoil } from 'ui/recoil/profiles';

const BlockUser: React.FC<{ message: MsgBlockUser }> = (props) => {
  const { message } = props;

  const blocker = useProfileRecoil(message.blocker);
  const blockerMoniker = blocker ? blocker?.name : message.blocker;

  const blocked = useProfileRecoil(message.blocked);
  const blockedMoniker = blocked ? blocked?.name : message.blocked;

  return (
    <Typography>
      <Trans
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
