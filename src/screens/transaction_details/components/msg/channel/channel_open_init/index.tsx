import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChannelOpenInit } from '@models';
import { useChainContext } from '@contexts';

const ChannelOpenInit = (props: {
  message: MsgChannelOpenInit;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelOpenInitContent"
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
          channel: message.channel,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelOpenInit;
