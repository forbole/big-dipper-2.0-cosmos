import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgEditUserGroup from '@/models/msg/subspaces/msg_edit_user_group';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const EditUserGroup: FC<{ message: MsgEditUserGroup }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);

  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:txMsgEditUserGroup"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          signer: signerMoniker,
          description: message.description,
        }}
      />
    </Typography>
  );
};

export default EditUserGroup;
