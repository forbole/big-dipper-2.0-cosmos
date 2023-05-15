import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgConvertCoin from '@/models/msg/erc20/msg_convert_coin';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const ConvertCoin: FC<{ message: MsgConvertCoin }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const amount = formatToken(message.coin.amount, message.coin.denom);
  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgConvertCoin"
        components={[<b />, <Name address={message.sender} name={senderMoniker} />]}
        values={{
          receiver: message.receiver,
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default ConvertCoin;
