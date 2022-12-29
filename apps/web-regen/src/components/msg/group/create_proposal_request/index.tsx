import Name from '@/components/name';
import MsgCreateProposalRequest from '@/models/msg/group/msg_create_proposal_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const CreateProposalRequest: FC<{ message: MsgCreateProposalRequest }> = (props) => {
  const { message } = props;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateProposalRequest"
        components={[<Name address={message.address} name={addressMoniker} />]}
      />
    </Typography>
  );
};

export default CreateProposalRequest;
