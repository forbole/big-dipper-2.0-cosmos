import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditNFT from '@/models/msg/nft/msg_edit_nft';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditNFT: FC<{ message: MsgEditNFT }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txEditNFTContent"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          id: message.id,
        }}
      />
    </Typography>
  );
};

export default EditNFT;
