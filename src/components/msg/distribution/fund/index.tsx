import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import {
  formatToken, formatNumber,
} from '@utils/format_token';
import { Name } from '@components';
import { MsgFundCommunityPool } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

function Fund(props: {
  message : MsgFundCommunityPool;
}) {
  const { t } = useTranslation('transactions');
  const { message } = props;

  const parsedAmount = message?.amount?.map((x) => {
    const amount = formatToken(x.amount, x.denom);
    return `${formatNumber(amount.value, amount.exponent)} ${amount.displayDenom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const depositor = useProfileRecoil(message.depositor);
  const depositorMoniker = depositor ? depositor?.name : message.depositor;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txFundContent"
        components={[
          (
            <Name
              address={message.depositor}
              name={depositorMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
}

export default Fund;
