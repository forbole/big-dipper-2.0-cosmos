import Name from '@/components/name';
import { MsgWithdrawDelegatorReward } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import { formatNumber } from '@/utils/format_token';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const WithdrawReward: React.FC<{ message: MsgWithdrawDelegatorReward }> = (props) => {
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
      <Trans
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
