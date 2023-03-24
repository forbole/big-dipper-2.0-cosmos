import { FC } from 'react';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import { MsgBurn } from '@/models';
import Name from '@/components/name';
import { useProfileRecoil } from '@/recoil/profiles';
import { formatNumber, formatToken } from '@/utils';

const Burn: FC<{ message: MsgBurn }> = (props) => {
  const { message } = props;

  const amount = formatToken(message.coin.amount, message.coin.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
    //Kept the "toUpperCase()" in order to show the token symbol in uppercase
  )} ${amount.displayDenom.toUpperCase()}`;

  const sender = useProfileRecoil(message.sender);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgBurnContent"
        components={[<Name address={message.sender} name={sender.name ?? message.sender} />, <b />]}
        values={{
          sender: message.sender,
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Burn;
