import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgVoteRequest from '@/models/msg/group/msg_vote_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const VoteRequest: FC<{ message: MsgVoteRequest }> = (props) => {
  const { message } = props;

  const voter = useProfileRecoil(message.voter);
  const voterMoniker = voter ? voter?.name : message.voter;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgVoteRequest"
        components={[<Name address={message.voter} name={voterMoniker} />]}
      />
    </Typography>
  );
};

export default VoteRequest;
