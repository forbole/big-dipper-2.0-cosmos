import Name from '@/components/name';
import { MsgVote } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { PROPOSAL_DETAILS } from '@/utils/go_to_page';
import Typography from '@mui/material/Typography';
import { Trans, useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FC, useMemo } from 'react';

const Vote: FC<{ message: MsgVote }> = (props) => {
  const { t } = useTranslation('transactions');
  const { message } = props;
  const vote = t(message.getOptionTranslationKey() ?? '');

  const voter = useProfileRecoil(message.voter);
  const voterMoniker = voter ? voter?.name : message.voter;

  const Proposal = useMemo(
    () => (
      <Link shallow href={PROPOSAL_DETAILS(message.proposalId)}>
        #{message.proposalId}
      </Link>
    ),
    [message.proposalId]
  );

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txVoteContent"
        components={[<Name address={message.voter} name={voterMoniker} />, <b />, Proposal]}
        values={{
          vote,
        }}
      />
    </Typography>
  );
};

export default Vote;
