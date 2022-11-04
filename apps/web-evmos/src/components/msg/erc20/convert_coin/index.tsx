import React from 'react';
import Trans from 'next-translate/Trans';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgConvertCoin } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const ConvertCoin = (props: {
  message: MsgConvertCoin;
}) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const senderMoniker = sender ? sender?.name : message.sender;

  const amount = formatToken(message.coin.amount, message.coin.denom);
  const parsedAmount = `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgConvertCoin"
        components={[
          <b />,
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          receiver: message.receiver,
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default ConvertCoin;
