import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import MsgOpenAuction from '@/models/msg/auction/msg_open_auction';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const OpenAuction: FC<{ message: MsgOpenAuction }> = (props) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txMsgOpenAuction"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          nftId: message.nftId,
        }}
      />
    </Typography>
  );
};

export default OpenAuction;
