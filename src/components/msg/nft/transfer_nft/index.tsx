import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgTransferNFT } from '@models';
import { useChainContext } from '@contexts';

const TransferNFT = (props: {
  message: MsgTransferNFT;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;

  const recipient = findAddress(message.recipient);
  const recipientMoniker = recipient ? recipient?.moniker : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTransferNFTContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.recipient}
              name={recipientMoniker}
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

export default TransferNFT;
