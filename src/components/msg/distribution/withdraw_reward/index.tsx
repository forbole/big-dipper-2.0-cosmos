import React from 'react';
import numeral from 'numeral';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgWithdrawDelegatorReward } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const WithdrawReward = (props: {
  message: MsgWithdrawDelegatorReward;
}) => {
  const { message } = props;
  const delegator = useProfileRecoil(message.delegatorAddress);
  const delegatorMoniker = delegator ? delegator?.name : message.delegatorAddress;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message
    .validatorAddress;

  const parsedAmount = message.amounts.map((x) => {
    return `${numeral(x.value).format(x.format)} ${x.denom.toUpperCase()}`;
  }).join(', ');

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txWithdrawRewardContent"
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

export default WithdrawReward;
