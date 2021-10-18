import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgMintFanToken } from '@models';
import { useChainContext } from '@contexts';

const MintFanToken = (props: {
  message: MsgMintFanToken;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const recipient = findAddress(message.recipient);
  const recipientMoniker = recipient ? recipient?.moniker : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgMintFanToken"
        components={[
          (
            <Name
              address={message.recipient}
              name={recipientMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default MintFanToken;
