import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgExecRequest from '@models/regen/msg/group/msg_exec_request';
import { useProfileRecoil } from 'ui/recoil/profiles';

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
