import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgRemoveUserFromUserGroup from '@/models/msg/subspaces/msg_remove_user_from_user_group';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const RemoveUserFromUserGroup: FC<{ message: MsgRemoveUserFromUserGroup }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgRemoveUserFromUserGroup"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
          user: message.user,
        }}
      />
    </Typography>
  );
};

export default RemoveUserFromUserGroup;
