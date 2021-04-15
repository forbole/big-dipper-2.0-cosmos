import React from 'react';
import { useTranslation } from 'i18n';
import numeral from 'numeral';
import { AddressDisplay } from '@components';
import { MsgDeposit } from '@models';
import { chainConfig } from '@src/chain_config';
import { formatDenom } from '@utils';
import { ProposalDisplay } from '..';
import { translationFormatter } from '../../utils';

const DepositProposal = (props: {
  message: MsgDeposit;
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
      {translationFormatter(t('txDepositOne'))}
      <span className="amount">
        {parsedAmount}
      </span>
      {translationFormatter(t('txDepositTwo'))}
      <span className="link">
        <ProposalDisplay proposalId={message.proposalId} />
      </span>
    </p>
  );
};

export default DepositProposal;
