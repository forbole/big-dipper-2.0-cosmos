import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgMintNFT from '@models/bitsong/msg/nft/msg_mint_nft';
import { useProfileRecoil } from 'ui/recoil/profiles';

const MintNFT: React.FC<{ message: MsgMintNFT }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMintNFTContent"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default MintNFT;
