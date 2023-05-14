import Name from '@/components/name';
import { MsgFundCommunityPool } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import useTranslationByApp from '@/hooks/useTranslationByApp';
import { FC } from 'react';

const Fund: FC<{ message: MsgFundCommunityPool }> = (props) => {
  const { t } = useTranslationByApp('transactions');
  const { message } = props;

  const parsedAmount = message?.amount
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const depositor = useProfileRecoil(message.depositor);
  const depositorMoniker = depositor ? depositor?.name : message.depositor;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txFundContent"
        components={[<Name address={message.depositor} name={depositorMoniker} />, <b />]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Fund;
