import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import MsgMintTokens from '@/models/msg/liquidity_provider/msg_mint_tokens';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber, formatToken } from '@/utils/format_token';

const MintTokens: FC<{ message: MsgMintTokens }> = (props) => {
  const { message } = props;
  const { t } = useTranslation('transactions');

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
      <Trans
        i18nKey="message_contents:txMintTokens"
        components={[<Name address={message.liquidityProvider} name={liqdPvdMoniker} />, <b />]}
        values={{
          amount: finalData,
        }}
      />
    </Typography>
  );
};

export default MintTokens;
