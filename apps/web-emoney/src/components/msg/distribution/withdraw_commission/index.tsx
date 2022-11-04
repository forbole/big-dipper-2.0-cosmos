import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { formatNumber } from '@utils/format_token';
import { MsgWithdrawValidatorCommission } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const WithdrawCommission = (props: { message: MsgWithdrawValidatorCommission }) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;
  const parsedAmount = message.amounts
    .map((x) => {
      return `${formatNumber(x.value, x.exponent)} ${x.displayDenom.toUpperCase()}`;
    })
    .join(', ');

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txWithdrawCommissionContent"
        components={[<Name address={message.validatorAddress} name={validatorMoniker} />, <b />]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default WithdrawCommission;
