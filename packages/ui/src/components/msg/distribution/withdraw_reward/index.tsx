import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import { MsgWithdrawDelegatorReward } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { formatNumber } from '@/utils/format_token';

const WithdrawReward: FC<{ message: MsgWithdrawDelegatorReward }> = (props) => {
  const { message } = props;
  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message.validatorAddress;

  const parsedAmount = message.amounts
    .map((x) => `${formatNumber(x.value, x.exponent)} ${x.displayDenom.toUpperCase()}`)
    .join(', ');

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txWithdrawRewardContent"
        components={[
          <Name address={message.delegatorAddress} name={delegatorMoniker} />,
          <b />,
          <Name address={message.validatorAddress} name={validatorMoniker} />,
        ]}
        values={{
          amount: parsedAmount,
        }}
      />
    </Typography>
  );
};

export default WithdrawReward;
