import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgConnectionOpenInit } from '@models';
import { useChainContext } from '@contexts';

const ConnectionOpenInit = (props: {
  message: MsgConnectionOpenInit;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenInitContent"
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
          clientId: message.clientId,
          counterparty: message.counterparty,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenInit;
