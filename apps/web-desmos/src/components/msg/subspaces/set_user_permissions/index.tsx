import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSetUserPermissions from '@/models/msg/subspaces/msg_set_user_permissions';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SetUserPermissions: FC<{ message: MsgSetUserPermissions }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSetUserPermissions"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
          user: message.json.user || '',
        }}
      />
    </Typography>
  );
};

export default SetUserPermissions;
