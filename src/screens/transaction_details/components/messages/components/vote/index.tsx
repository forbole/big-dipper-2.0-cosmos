import React from 'react';
import { useTranslation } from 'i18n';
import { AddressDisplay } from '@components';
import { MsgVote } from '@models';
import { ProposalDisplay } from '..';
import { translationFormatter } from '../../utils';

const Vote = (props: {
  message: MsgVote;
}) => {
  const { t } = useTranslation(['activities']);
  const { message } = props;

  const vote = t(message.getOptionTranslationKey());
  return (
    <p>
      <span className="address">
        <AddressDisplay address={message.voter} />
      </span>
      {translationFormatter(t('txVoteOne'))}
      <span className="bold">
        {vote}
      </span>
      {translationFormatter(t('txVoteTwo'))}
      <span className="link">
        <ProposalDisplay proposalId={message.proposalId} />
      </span>
    </p>
  );
};

export default Vote;
