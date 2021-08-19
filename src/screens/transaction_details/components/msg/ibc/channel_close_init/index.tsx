import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChannelCloseInit } from '@models';
import { useChainContext } from '@contexts';

const ChannelCloseInit = (props: {
  message: MsgChannelCloseInit;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelCloseInitContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelCloseInit;
