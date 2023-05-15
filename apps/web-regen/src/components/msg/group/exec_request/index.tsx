import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgExecRequest from '@/models/msg/group/msg_exec_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ExecRequest: FC<{ message: MsgExecRequest }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgExecRequest"
        components={[<Name address={message.signer} name={signerMoniker} />]}
      />
    </Typography>
  );
};

export default ExecRequest;
