import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgWithdrawDelegatorReward } from '@models';
import { translationFormatter } from '../../utils';

const WithdrawReward = (props: {
  message: MsgWithdrawDelegatorReward;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txWithdrawRewardOne'))}
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
    </p>
  );
};

export default WithdrawReward;
