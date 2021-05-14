import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgDtagCancelTransfer } from '@models';
import { useChainContext } from '@contexts';

const DtagCancelTransfer = (props: {
  message: MsgDtagCancelTransfer;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;

  const receiver = findAddress(message.receiver);
  const receiverMoniker = receiver ? receiver?.moniker : message
    .receiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCancelDTagTransferContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
          (
            <Name
              address={message.receiver}
              name={receiverMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default DtagCancelTransfer;
