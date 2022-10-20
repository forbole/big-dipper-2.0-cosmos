import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateGroupAdminRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const UpdateGroupAdminRequest = (props: {
  message: MsgUpdateGroupAdminRequest;
}) => {
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
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
          (
            <Name
              address={message.newAdmin}
              name={newAdminMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAdminRequest;
