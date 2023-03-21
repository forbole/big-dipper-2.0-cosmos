import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgWithdrawValidatorCommission } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber } from '@/utils/format_token';

const WithdrawCommission: FC<{ message: MsgWithdrawValidatorCommission }> = (props) => {
  const { message } = props;
  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;
  const parsedAmount = message.amounts
    //Removed ".toUpperCase()" from the end of the line below per Reza's request
    .map((x) => `${formatNumber(x.value, x.exponent)} ${x.displayDenom}`)
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
