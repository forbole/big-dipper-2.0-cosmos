import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpgradeClient } from '@models';
import { useChainContext } from '@contexts';

const UpgradeClient = (props: {
    message: MsgUpgradeClient;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpgradeClientContent"
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
        }}
      />
    </Typography>
  );
};

export default UpgradeClient;
