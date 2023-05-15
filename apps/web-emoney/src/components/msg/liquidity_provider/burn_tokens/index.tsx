import Name from '@/components/name';
import MsgBurnTokens from '@/models/msg/liquidity_provider/msg_burn_tokens';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC } from 'react';

const BurnTokens: FC<{ message: MsgBurnTokens }> = (props) => {
  const { message } = props;
  const { t } = useAppTranslation('transactions');

  const liquidityProvider = useProfileRecoil(message.liquidityProvider);
  const liqdPvdMoniker = liquidityProvider ? liquidityProvider?.name : message.liquidityProvider;

  const amountBeforeParse = message.amount;
  const parsedAmount = amountBeforeParse.map((x) => {
    const eachAmount = formatToken(x.amount, x.denom);
    return `${formatNumber(
      eachAmount.value,
      eachAmount.exponent
    )} ${eachAmount.displayDenom.toUpperCase()}`;
  });
  const finalData = parsedAmount.reduce(
    (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value
  );

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txBurnTokens"
        components={[<Name address={message.liquidityProvider} name={liqdPvdMoniker} />, <b />]}
        values={{
          amount: finalData,
        }}
      />
    </Typography>
  );
};

export default BurnTokens;
