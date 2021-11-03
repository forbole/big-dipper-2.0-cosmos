import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { formatDenom } from '@utils/format_denom';
import { Name } from '@components';
import { MsgDelegate } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Delegate = (props: {
  message: MsgDelegate;
}) => {
  const { message } = props;
  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message
    .validatorAddress;
  const amount = formatDenom(message.amount.amount, message.amount.denom);

  const parsedAmount = `${numeral(amount.value).format(amount.format)} ${amount.denom.toUpperCase()}`;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDelegateContent"
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
              address={message.validatorAddress}
              name={validatorMoniker}
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

export default Delegate;
