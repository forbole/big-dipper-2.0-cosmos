import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgSubmitProposal } from '@models';
import { ProposalDisplay } from '..';
import { translationFormatter } from '../../utils';

const SubmitProposal = (props: {
  message: MsgSubmitProposal;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.proposer} />
      </span>
      {translationFormatter(t('txSubmitProposalOne'))}
      <span className="link">
        <ProposalDisplay proposalId={null} />
      </span>
    </p>
  );
};

export default SubmitProposal;
