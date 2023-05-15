import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUpdateGroupAdminRequest from '@/models/msg/group/msg_update_group_admin_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateGroupAdminRequest: FC<{ message: MsgUpdateGroupAdminRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const newAdmin = useProfileRecoil(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.name : message.newAdmin;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgUpdateGroupAdminRequest"
        components={[
          <Name address={message.admin} name={adminMoniker} />,
          <Name address={message.newAdmin} name={newAdminMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAdminRequest;
