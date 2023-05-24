import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUpdateGroupAccountAdminRequest from '@/models/msg/group/msg_update_group_account_admin_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateGroupAccountAdminRequest: FC<{ message: MsgUpdateGroupAccountAdminRequest }> = (
  props
) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const newAdmin = useProfileRecoil(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.name : message.newAdmin;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgUpdateGroupAccountAdminRequest"
        components={[
          <Name address={message.admin} name={adminMoniker} />,
          <Name address={message.newAdmin} name={newAdminMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAccountAdminRequest;
