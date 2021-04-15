import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { formatDenom } from '@utils';
import { AddressDisplay } from '@components';
import { MsgUndelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { translationFormatter } from '../../utils';

const Undelegate = (props: {
  message: MsgUndelegate;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txUndelegateOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txUndelegateTwo'))}
      <span className="address">
        <AddressDisplay address={message.validatorAddress} />
      </span>
    </p>
  );
};

export default Undelegate;
