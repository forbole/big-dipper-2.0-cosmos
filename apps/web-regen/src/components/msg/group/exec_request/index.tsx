import Name from '@/components/name';
import MsgExecRequest from '@/models/msg/group/msg_exec_request';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const ExecRequest: React.FC<{ message: MsgExecRequest }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgExecRequest"
        components={[<Name address={message.signer} name={signerMoniker} />]}
      />
    </Typography>
  );
};

export default ExecRequest;
