import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgBurnNFT from '@/models/msg/nft/msg_burn_nft';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const BurnNFT: FC<{ message: MsgBurnNFT }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <AppTrans
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
