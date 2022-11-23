import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgCancelAuction from '@/models/msg/auction/msg_cancel_auction';
import { useProfileRecoil } from '@/recoil/profiles';

const CancelAuction: React.FC<{ message: MsgCancelAuction }> = (props) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgCancelAuction"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          id: numeral(message.id).format('0,0'),
        }}
      />
    </Typography>
  );
};

export default CancelAuction;
