import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUnblockUser } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const UnBlockUser = (props: {
  message: MsgUnblockUser;
}) => {
  const { message } = props;

  const blocker = useProfileRecoil(message.blocker);
  const blockerMoniker = blocker ? blocker?.name : message
    .blocker;

  const blocked = useProfileRecoil(message.blocked);
  const blockedMoniker = blocked ? blocked?.name : message
    .blocked;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUnblockUserContent"
        components={[
          (
            <Name
              address={message.blocker}
              name={blockerMoniker}
            />
          ),
          (
            <Name
              address={message.blocked}
              name={blockedMoniker}
            />
          ),
          <span style={{ wordBreak: 'break-all' }} />,
        ]}
        values={{
          subspace: message.subspace,
        }}
      />
    </Typography>
  );
};

export default UnBlockUser;
