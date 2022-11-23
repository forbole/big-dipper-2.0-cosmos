import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgCancelOrder from '@/models/msg/market/msg_cancel_order';
import { useProfileRecoil } from '@/recoil/profiles';

const CancelOrder: React.FC<{ message: MsgCancelOrder }> = (props) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCancelOrderContent"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          clientOrderId: message.clientOrderId,
        }}
      />
    </Typography>
  );
};

export default CancelOrder;
