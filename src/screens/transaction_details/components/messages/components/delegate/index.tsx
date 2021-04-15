import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgDelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { translationFormatter } from '../../utils';

const Delegate = (props: {
  message: MsgDelegate;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txDelegateOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txDelegateTwo'))}
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
    </p>
  );
};

export default Delegate;
