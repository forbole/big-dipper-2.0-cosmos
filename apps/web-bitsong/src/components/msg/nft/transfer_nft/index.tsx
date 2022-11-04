import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgTransferNFT } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const TransferNFT = (props: { message: MsgTransferNFT }) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txTransferNFTContent"
        components={[
          <Name address={message.sender} name={senderMoniker} />,
          <b />,
          <Name address={message.recipient} name={recipientMoniker} />,
        ]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default TransferNFT;
