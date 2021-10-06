import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgSend } from '@models';
import { useChainContext } from '@contexts';

const Send = (props: {
  message: MsgSend;
}) => {
  const { t } = useTranslation('transactions');
  const { findAddress } = useChainContext();
  const { message } = props;

  const parsedAmount = message?.amount?.map((x) => {
    const amount = formatDenom(x.amount, x.denom);

    return `${numeral(amount.value).format(amount.format)} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const from = findAddress(message.fromAddress);
  const fromMoniker = from ? from?.moniker : message.fromAddress;

  const to = findAddress(message.toAddress);
  const toMoniker = to ? to?.moniker : message.toAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSendContent"
        components={[
          (
            <Name
              address={message.fromAddress}
              name={fromMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.toAddress}
              name={toMoniker}
            />
          ),
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Send;
