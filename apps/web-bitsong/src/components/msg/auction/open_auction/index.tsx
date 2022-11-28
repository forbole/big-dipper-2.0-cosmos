import Name from '@/components/name';
import MsgOpenAuction from '@/models/msg/auction/msg_open_auction';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const OpenAuction: React.FC<{ message: MsgOpenAuction }> = (props) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
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
