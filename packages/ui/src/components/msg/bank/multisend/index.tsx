import { useStyles } from '@/components/msg/bank/multisend/styles';
import Name from '@/components/name';
import { MsgMultiSend } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const RecieverName: FC<{ address: string; coins: MsgCoin[]; i: number }> = (props) => {
  const { address, coins, i } = props;
  const { t } = useTranslation('transactions');
  const recieverUser = useProfileRecoil(address);
  const recieverMoniker = recieverUser ? recieverUser?.name : address;
  const parsedAmount = coins
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, j, array) => text + (j < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );
  return (
    // eslint-disable-next-line react/no-array-index-key
    <Typography key={`${i}-${recieverUser?.address}`}>
      <Trans
        i18nKey="message_contents:txMultisendContentTwo"
        components={[<Name address={recieverUser?.address} name={recieverMoniker} />, <b />]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

const Multisend: React.FC<{ message: MsgMultiSend }> = (props) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  const { message } = props;

  const sender = message.inputs[0];
  const senderAmount = sender?.coins
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const userSend = useProfileRecoil(sender?.address);
  const validatorMoniker = userSend ? userSend?.name : sender?.address;

  return (
    <div>
      <Typography>
        <Trans
          i18nKey="message_contents:txMultisendContentOne"
          components={[<Name address={sender?.address} name={validatorMoniker} />, <b />]}
          values={{
            amount: senderAmount,
          }}
        />
      </Typography>
      <div className={classes.multisend}>
        {message?.outputs
          ?.filter((x) => x)
          ?.map((x, i) => (
            <RecieverName key={x.address} address={x.address} coins={x.coins} i={i} />
          ))}
      </div>
    </div>
  );
};

export default Multisend;
