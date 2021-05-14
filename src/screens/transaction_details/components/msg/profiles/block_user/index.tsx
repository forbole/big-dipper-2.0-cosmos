import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgBlockUser } from '@models';
import { useChainContext } from '@contexts';

const BlockUser = (props: {
  message: MsgBlockUser;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const blocker = findAddress(message.blocker);
  const blockerMoniker = blocker ? blocker?.moniker : message
    .blocker;

  const blocked = findAddress(message.blocked);
  const blockedMoniker = blocked ? blocked?.moniker : message
    .blocked;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txBlockUserContent"
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

export default BlockUser;
