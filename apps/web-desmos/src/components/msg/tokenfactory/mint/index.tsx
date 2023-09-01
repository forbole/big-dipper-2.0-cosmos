import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMint from '@/models/msg/tokenfactory/msg_mint';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const Mint: FC<{ message: MsgMint }> = props => {
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
        i18nKey="message_contents:txMsgMint"
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

export default Mint;
