import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreatePool } from '@models';
import { useChainContext } from '@contexts';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const CreatePool = (props: {
    message: MsgCreatePool;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message
    .sender;
  const assets = message.poolAssets.map((x) => {
    const amount = formatDenom(x.token.amount, x.token.denom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreatePoolContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          assets,
          futurePoolGovernor: message.futurePoolGovernor,
        }}
      />
    </Typography>
  );
};

export default CreatePool;
