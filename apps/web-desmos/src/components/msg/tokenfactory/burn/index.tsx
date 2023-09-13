import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgBurn from '@/models/msg/tokenfactory/msg_burn';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const Burn: FC<{ message: MsgBurn }> = props => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const senderMoniker = sender ? sender?.name : message.sender;

  const amount = formatToken(message.amount[0]?.amount, message.amount[0]?.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgBurn"
        components={[<Name address={message.sender} name={senderMoniker} />, <b />]}
        values={{
          sender: senderMoniker,
          amount: parsedAmount,
          subspace_id: message.subspace_id,
        }}
      />
    </Typography>
  );
};

export default Burn;
