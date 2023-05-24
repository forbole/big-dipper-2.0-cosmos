import useStyles from '@/components/msg/bank/multisend/styles';
import Name from '@/components/name';
import { MsgMultiSend } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const RecieverName: FC<{ address: string; coins: MsgCoin[] }> = (props) => {
  const { address: theAddress, coins } = props;
  const { t } = useAppTranslation('transactions');
  const { address, name } = useProfileRecoil(theAddress);
  const recieverMoniker = name || theAddress;
  const parsedAmount = coins
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, j, array) => text + (j < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );
  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMultisendContentTwo"
        components={[<Name address={address} name={recieverMoniker} />, <b />]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

const Multisend: FC<{ message: MsgMultiSend }> = (props) => {
  const { t } = useAppTranslation('transactions');
  const { classes } = useStyles();

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

  const { address, name } = useProfileRecoil(sender?.address);
  const validatorMoniker = name || sender?.address;

  return (
    <div>
      <Typography>
        <AppTrans
          i18nKey="message_contents:txMultisendContentOne"
          components={[<Name address={address} name={validatorMoniker} />, <b />]}
          values={{
            amount: senderAmount,
          }}
        />
      </Typography>
      <div className={classes.multisend}>
        {message?.outputs
          ?.filter((x) => x)
          ?.map((x) => (
            <RecieverName key={x.address} address={x.address} coins={x.coins} />
          ))}
      </div>
    </div>
  );
};

export default Multisend;
