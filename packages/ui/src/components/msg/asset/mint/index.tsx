import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgMint } from '@/models';
import { formatNumber, formatToken } from '@/utils';

const Mint: FC<{ message: MsgMint }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);

  const amount = formatToken(message.coin.amount, message.coin.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgMintContent"
        components={[<Name address={message.sender} name={sender.name ?? message.sender} />, <b />]}
        values={{
          sender: message.sender,
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Mint;
