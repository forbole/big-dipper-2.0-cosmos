import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgUpdateGroupAccountAdminRequest from '@models/regen/msg/group/msg_update_group_account_admin_request';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateGroupAccountAdminRequest: React.FC<{ message: MsgUpdateGroupAccountAdminRequest }> = (
  props
) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const newAdmin = useProfileRecoil(message.newAdmin);
  const newAdminMoniker = newAdmin ? newAdmin?.name : message.newAdmin;

  return (
    <Typography>
      <Trans
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
