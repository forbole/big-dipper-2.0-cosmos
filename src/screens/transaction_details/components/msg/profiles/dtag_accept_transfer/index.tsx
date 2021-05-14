import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgDtagAcceptTransfer } from '@models';
import { useChainContext } from '@contexts';

const DtagAcceptTransfer = (props: {
  message: MsgDtagAcceptTransfer;
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
        i18nKey="message_contents:txAcceptDTagTransferContent"
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

export default DtagAcceptTransfer;
