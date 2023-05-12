import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgTransferNFT from '@/models/msg/nft/msg_transfer_nft';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const TransferNFT: FC<{ message: MsgTransferNFT }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const recipient = useProfileRecoil(message.recipient);
  const recipientMoniker = recipient ? recipient?.name : message.recipient;

  return (
    <Typography>
      <Trans
        i18nKey="web_bitsong:message_contents.txTransferNFTContent"
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
