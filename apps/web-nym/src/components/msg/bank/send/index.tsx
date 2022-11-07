import React from 'react';
import Trans from 'next-translate/Trans';
import { formatToken, formatNumber } from 'ui/utils/format_token';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgSend } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Send = (props: { message: MsgSend }) => {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount
    ?.map((x) => {
      const amount = formatToken(x.amount, x.denom);
      return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
    })
    .reduce(
      (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value
    );

  const from = useProfileRecoil(message.fromAddress);
  const fromMoniker = from ? from?.name : message.fromAddress;

  const to = useProfileRecoil(message.toAddress);
  const toMoniker = to ? to?.name : message.toAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSendContent"
        components={[
          <Name address={message.fromAddress} name={fromMoniker} />,
          <b />,
          <Name address={message.toAddress} name={toMoniker} />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default Send;
