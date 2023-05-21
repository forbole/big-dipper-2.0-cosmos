import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgAddMarketOrder from '@/models/msg/market/msg_add_market_order';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const AddMarketOrder: FC<{ message: MsgAddMarketOrder }> = (props) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;
  const destination = formatToken(message.destination.amount, message.destination.denom);

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txAddMarketOrderContent"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />, <b />, <b />]}
        values={{
          clientOrderId: message.clientOrderId,
          source: message.source,
          destination: `${formatNumber(
            destination.value,
            destination.exponent
          )} ${destination.displayDenom.toUpperCase()}`,
        }}
      />
    </Typography>
  );
};

export default AddMarketOrder;
