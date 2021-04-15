import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgSetWithdrawAddress } from '@models';
import { translationFormatter } from '../../utils';

const SetWithdrawalAddress = (props: {
  message: MsgSetWithdrawAddress;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txsetRewardAddressOne'))}
      <span className="address">
        <AddressDisplay address={message.withdrawalAddress} />
      </span>
    </p>
  );
};

export default SetWithdrawalAddress;
