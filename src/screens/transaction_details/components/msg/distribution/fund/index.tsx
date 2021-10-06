import React from 'react';
import numeral from 'numeral';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgFundCommunityPool } from '@models';
import { useChainContext } from '@contexts';

const Fund = (props: {
  message : MsgFundCommunityPool;
}) => {
  const { t } = useTranslation('transactions');
  const { findAddress } = useChainContext();
  const { message } = props;

  const parsedAmount = message?.amount?.map((x) => {
    const amount = formatDenom(x.amount, x.denom);
    return `${numeral(amount.value).format(amount.format)} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  const depositor = findAddress(message.depositor);
  const depositorMoniker = depositor ? depositor?.moniker : message.depositor;

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
};

export default Fund;
