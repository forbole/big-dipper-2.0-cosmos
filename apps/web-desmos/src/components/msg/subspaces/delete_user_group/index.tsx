import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgDeleteUserGroup from '@/models/msg/subspaces/msg_delete_user_group';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const DeleteUserGroup: FC<{ message: MsgDeleteUserGroup }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgDeleteUserGroup"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
        }}
      />
    </Typography>
  );
};

export default DeleteUserGroup;
