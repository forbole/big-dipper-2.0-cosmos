import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgCreateGroupRequest from '@/models/msg/group/msg_create_group_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const CreateGroupRequest: FC<{ message: MsgCreateGroupRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgCreateGroupRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default CreateGroupRequest;
