import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCancelReplaceLimitOrder from '@/models/msg/market/msg_cancel_replace_limit_order';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const CancelReplaceLimitOrder: FC<{ message: MsgCancelReplaceLimitOrder }> = (props) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;
  const source = formatToken(message.source.amount, message.source.denom);
  const destination = formatToken(message.destination.amount, message.destination.denom);
  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txCancelReplaceLimitOrderContent"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />, <b />, <b />]}
        values={{
          clientOrderId: message.originalClientOrderId,
          source: `${formatNumber(
            source.value,
            source.exponent
          )} ${source.displayDenom.toUpperCase()}`,
          destination: `${formatNumber(
            destination.value,
            destination.exponent
          )} ${destination.displayDenom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default CancelReplaceLimitOrder;
