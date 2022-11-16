import React from 'react';
import Trans from 'next-translate/Trans';
import { formatToken, formatNumber } from 'ui/utils/format_token';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgConvertCoin from '@models/evmos/msg/erc20/msg_convert_coin';
import { useProfileRecoil } from '@recoil/profiles';

const ConvertCoin: React.FC<{ message: MsgConvertCoin }> = (props) => {
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
      <Trans
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
