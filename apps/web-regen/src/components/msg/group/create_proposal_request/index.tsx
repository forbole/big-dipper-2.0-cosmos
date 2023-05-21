import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateProposalRequest from '@/models/msg/group/msg_create_proposal_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateProposalRequest: FC<{ message: MsgCreateProposalRequest }> = (props) => {
  const { message } = props;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgCreateProposalRequest"
        components={[<Name address={message.address} name={addressMoniker} />]}
      />
    </Typography>
  );
};

export default CreateProposalRequest;
