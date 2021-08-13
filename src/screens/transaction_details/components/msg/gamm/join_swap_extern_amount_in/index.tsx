/* eslint-disable max-len */
import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgJoinSwapExternAmountIn } from '@models';
import { useChainContext } from '@contexts';
import { chainConfig } from '@configs';
import numeral from 'numeral';
import { formatDenom } from '@utils/format_denom';
import useTranslation from 'next-translate/useTranslation';

const JoinSwapExternAmountIn = (props: {
    message: MsgJoinSwapExternAmountIn;
}) => {
  const { findAddress } = useChainContext();
  const { t } = useTranslation('transactions');
  const { message } = props;

  const sender = findAddress(message.sender);
  const senderMoniker = sender ? sender?.moniker : message.sender;
  const amountIn = message.tokenIn.map((x) => {
    const amount = formatDenom(x.amount, x.denom);
    return `${numeral(amount.value).format('0,0.[0000]')} ${amount.denom.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);
  const amountOutFormatDenom = formatDenom(message.shareOutMinAmount, chainConfig?.primaryTokenUnit);
  const amountOut = `${numeral(amountOutFormatDenom.value).format('0,0.[0000]')} ${amountOutFormatDenom.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txJoinSwapExternAmountInContent"
        components={[
          (
            <Name
              address={message.sender}
              name={senderMoniker}
            />
          ),
        ]}
        values={{
          poolId: message.poolId,
          amountIn,
          amountOut,
        }}
      />
    </Typography>
  );
};

export default JoinSwapExternAmountIn;
