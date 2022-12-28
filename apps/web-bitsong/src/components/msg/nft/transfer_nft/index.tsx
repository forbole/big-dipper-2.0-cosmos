import Name from '@/components/name';
import MsgTransferNFT from '@/models/msg/nft/msg_transfer_nft';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const TransferNFT: React.FC<{ message: MsgTransferNFT }> = (props) => {
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
