import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgBeginUnlockingAll } from '@models';
import { useChainContext } from '@contexts';

const BeginUnlockingAll = (props: {
    message: MsgBeginUnlockingAll;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const owner = findAddress(message.owner);
  const ownerMoniker = owner ? owner?.moniker : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txBeginUnlockingAllContent"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default BeginUnlockingAll;
