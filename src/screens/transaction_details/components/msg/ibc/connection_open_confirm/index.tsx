import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgConnectionOpenConfirm } from '@models';
import { useChainContext } from '@contexts';

const ConnectionOpenConfirm = (props: {
  message: MsgConnectionOpenConfirm;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenConfirmContent"
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
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenConfirm;
