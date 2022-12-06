import Name from '@/components/name';
import MsgMintTokens from '@/models/msg/liquidity_provider/msg_mint_tokens';
import { useProfileRecoil } from '@/recoil/profiles';
import { formatNumber, formatToken } from '@/utils/format_token';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const MintTokens: React.FC<{ message: MsgMintTokens }> = (props) => {
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
