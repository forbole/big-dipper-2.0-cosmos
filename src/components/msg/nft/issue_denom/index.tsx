import React from 'react';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgIssueDenom } from '@models';
import { useChainContext } from '@contexts';

const IssueDenom = (props: {
  message: MsgIssueDenom ;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;
  const { t } = useTranslation('transactions');

  const id = findAddress(message.id);
  const idMoniker = id ? id?.moniker : message.id;
  const name = findAddress(message.name);
  const royaltyShare = findAddress(message.royaltyShare);
  const sender = findAddress(message.sender);
  const creators = findAddress(message.creators);
  const creator = creators.map((x) => {
    return x;
  });
  const splitShares = findAddress(message.splitShares);
  const splitShare = splitShares.map((x) => { return x; });

  const amountBeforeParse = message.amount;
  const parsedAmount = amountBeforeParse.map((x) => {
    const eachAmount = formatDenom(x.amount, x.denom);
    return `${numeral(eachAmount.value).format('0,0.[000000]')} ${eachAmount.denom.toUpperCase()}`;
  });
  const finalData = parsedAmount.reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t(' and ')} `) + value);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txIssueDenom"
        components={[
          (
            <Name
              address={message.liquidityProvider}
              name={liqdPvdMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          amount: finalData,
        }}
      />
    </Typography>
  );
};

export default IssueDenom;
