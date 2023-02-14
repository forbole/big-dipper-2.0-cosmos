import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgSubmitProposal } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SubmitProposal: FC<{ message: MsgSubmitProposal }> = (props) => {
  const { message } = props;

  const proposer = useProfileRecoil(message.proposer);
  const proposerMoniker = proposer ? proposer?.name : message.proposer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSubmitProposalContent"
        components={[<Name address={message.proposer} name={proposerMoniker} />]}
      />
    </Typography>
  );
};

export default SubmitProposal;
