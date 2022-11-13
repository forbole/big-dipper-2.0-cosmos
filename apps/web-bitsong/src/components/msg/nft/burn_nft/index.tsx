import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgBurnNFT from '@models/bitsong/msg/nft/msg_burn_nft';
import { useProfileRecoil } from '@recoil/profiles';

const BurnNFT = (props: { message: MsgBurnNFT }) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txBurnNFTContent"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default BurnNFT;
