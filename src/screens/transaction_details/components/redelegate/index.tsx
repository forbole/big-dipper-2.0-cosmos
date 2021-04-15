import React from 'react';
import numeral from 'numeral';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { formatDenom } from '@utils';
import { MsgRedelegate } from '@models';
import { chainConfig } from '@src/chain_config';
import { translationFormatter } from '../../utils';

const Redelegate = (props: {
  message: MsgRedelegate;
}) => {
  const { t } = useTranslation(['activities']);

  const { message } = props;

  const parsedAmount = `${formatDenom(chainConfig.display, numeral(message.amount.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.delegatorAddress} />
      </span>
      {translationFormatter(t('txRedelegateOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txRedelegateTwo'))}
      <span className="address">
        <AddressDisplay address={message.validatorSrcAddress} />
      </span>
      {translationFormatter(t('txRedelegateThree'))}
      <span className="address">
        <AddressDisplay address={message.validatorDstAddress} />
      </span>
    </p>
  );
};

export default Redelegate;
