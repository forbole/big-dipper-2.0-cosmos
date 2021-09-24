import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgBurnTokens } from '@models';
import { useChainContext } from '@contexts';

const BurnTokens = (props: {
  message: MsgBurnTokens;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');

  const liquidityProvider = findAddress(message.liquidityProvider);
  const liqdPvdMoniker = liquidityProvider ? liquidityProvider?.moniker : message.liquidityProvider;

  const amountBeforeParse = message.amount;
  const parsedAmount = amountBeforeParse.map((x) => {
    const eachAmount = formatDenom(x.amount, x.denom);
    return `${numeral(eachAmount.value).format('0,0.[000000]')} ${eachAmount.denom.toUpperCase()}`;
  });
  const finalData = parsedAmount.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txBurnTokens"
        components={[
          (
            <Name
              address={message.liquidityProvider}
              name={liqdPvdMoniker}
            />
          ),
          <b />,
          <b />,
          <b />,
        ]}
        values={{
          amount: finalData,
        }}
      />
    </Typography>
  );
};

export default BurnTokens;
