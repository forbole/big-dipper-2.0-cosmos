import Name from '@/components/name';
import MsgUpdateGroupAdminRequest from '@/models/msg/group/msg_update_group_admin_request';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const UpdateGroupAdminRequest: React.FC<{ message: MsgUpdateGroupAdminRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const newAdmin = useProfileRecoil(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.name : message.newAdmin;

  return (
    <Typography>
      <Trans
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
