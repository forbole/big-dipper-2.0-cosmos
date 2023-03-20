import { FC } from 'react';
import { useProfileRecoil } from '@/recoil/profiles';
import { Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import Name from '@/components/name';
import { MsgUnfreeze } from '@/models';
import { formatNumber, formatToken } from '@/utils';

const Unfreeze: FC<{ message: MsgUnfreeze }> = (props) => {
  const { message } = props;

  const sender = useProfileRecoil(message.sender);
  const account = useProfileRecoil(message.account);

  const amount = formatToken(message.coin.amount, message.coin.denom);

  const parsedAmount = `${formatNumber(
    amount.value,
    amount.exponent
  )} ${amount.displayDenom.toUpperCase()}`;
  return (
    <Typography>
      <Trans
        i18nKey="message_contents:msgUnfreezeContent"
        components={[
          <Name address={message.sender} name={sender.name ?? message.sender} />,
          <Name address={message.account} name={account.name ?? message.account} />,
          <b />,
        ]}
        values={{
          sender: message.sender,
          account: message.account,
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Unfreeze;
