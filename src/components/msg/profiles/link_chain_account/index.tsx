import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgLinkChainAccount } from '@models';
import { useChainContext } from '@contexts';

const LinkChainAccount = (props: {
  message: MsgLinkChainAccount;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const signer = findAddress(message.signer);
  const signerMoniker = signer ? signer?.moniker : message
    .signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txLinkChainAccount"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          (
            <b />
          ),
        ]}
        values={{
          name: message.chainConfig.name,
        }}
      />
    </Typography>
  );
};

export default LinkChainAccount;
