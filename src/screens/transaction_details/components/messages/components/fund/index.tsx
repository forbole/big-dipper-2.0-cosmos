import React from 'react';
import { useTranslation } from 'i18n';
import numeral from 'numeral';
import { AddressDisplay } from '@components';
import { MsgFundCommunityPool } from '@models';
import { formatDenom } from '@utils';
import { chainConfig } from '@src/chain_config';
import { translationFormatter } from '../../utils';

const Fund = (props: {
  message : MsgFundCommunityPool;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  const parsedAmount = message?.amount?.map((x) => {
    return `${formatDenom(chainConfig.display, numeral(x.amount).value(), '0,0.0[000]').format} ${chainConfig.display.toUpperCase()}`;
  }).reduce((text, value, i, array) => text + (i < array.length - 1 ? ', ' : ` ${t('and')} `) + value);

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.depositor} />
      </span>
      {translationFormatter(t('txFundOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txFundTwo'), {
        after: false,
      })}
    </p>
  );
};

export default Fund;
