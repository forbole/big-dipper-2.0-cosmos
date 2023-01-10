import Name from '@/components/name';
import { MsgWithdrawValidatorCommission } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber } from '@/utils/format_token';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const WithdrawCommission: FC<{ message: MsgWithdrawValidatorCommission }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;
  const parsedAmount = message.amounts
    .map((x) => `${formatNumber(x.value, x.exponent)} ${x.displayDenom.toUpperCase()}`)
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
