import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgConnectionOpenAck } from '@models';
import { useChainContext } from '@contexts';

const ConnectionOpenAck = (props: {
  message: MsgConnectionOpenAck;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenAckContent"
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
          connectionId: message.connectionId,
          counterpartyConnectionId: message.counterpartyConnectionId,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenAck;
