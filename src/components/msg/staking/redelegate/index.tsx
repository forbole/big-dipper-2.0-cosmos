import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { formatDenom } from '@utils/format_denom';
import { MsgRedelegate } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Redelegate = (props: {
  message: MsgRedelegate;
}) => {
  const { message } = props;
  const amount = formatDenom(message.amount.amount, message.amount.denom);
  const parsedAmount = `${numeral(amount.value).format(amount.format)} ${amount.denom.toUpperCase()}`;

  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message
    .delegatorAddress;

  const from = useProfileRecoil(message.validatorSrcAddress);
  const fromMoniker = from ? from?.name : message
    .validatorSrcAddress;

  const to = useProfileRecoil(message.validatorDstAddress);
  const toMoniker = to ? to?.name : message
    .validatorDstAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txRedelegateContent"
        components={[
          (
            <Name
              address={message.delegatorAddress}
              name={delegatorMoniker}
            />
          ),
          <b />,
          (
            <Name
              address={message.validatorSrcAddress}
              name={fromMoniker}
            />
          ),
          (
            <Name
              address={message.validatorDstAddress}
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

export default Redelegate;
