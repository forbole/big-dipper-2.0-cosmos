import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCancelOrder from '@/models/msg/market/msg_cancel_order';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CancelOrder: FC<{ message: MsgCancelOrder }> = (props) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <AppTrans
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
