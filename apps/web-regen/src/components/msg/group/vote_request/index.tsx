import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgVoteRequest from '@models/regen/msg/group/msg_vote_request';
import { useProfileRecoil } from 'ui/recoil/profiles';

const VoteRequest: React.FC<{ message: MsgVoteRequest }> = (props) => {
  const { message } = props;

  const voter = useProfileRecoil(message.voter);
  const voterMoniker = voter ? voter?.name : message.voter;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgVoteRequest"
        components={[<Name address={message.voter} name={voterMoniker} />]}
      />
    </Typography>
  );
};

export default VoteRequest;