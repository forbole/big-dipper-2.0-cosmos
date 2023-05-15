import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgSetUserGroupPermissions from '@/models/msg/subspaces/msg_set_user_group_permissions';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const SetUserGroupPermissions: FC<{ message: MsgSetUserGroupPermissions }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgSetUserGroupPermissions"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default SetUserGroupPermissions;
