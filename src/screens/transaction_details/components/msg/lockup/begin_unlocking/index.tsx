import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgBeginUnlocking } from '@models';
import { useChainContext } from '@contexts';

const BeginUnlocking = (props: {
    message: MsgBeginUnlocking;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txBeginUnlockingContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
        ]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default BeginUnlocking;
