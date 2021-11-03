import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgDtagTransferRequest } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const DtagTransferRequest = (props: {
  message: MsgDtagTransferRequest;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message
    .sender;

  const receiver = useProfileRecoil(message.receiver);
  const receiverMoniker = receiver ? receiver?.name : message
    .receiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRequestDTagTransferContent"
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

export default DtagTransferRequest;
