import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgCreateGroupRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const CreateGroupRequest = (props: {
  message: MsgCreateGroupRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateGroupRequest"
        components={[
          (
            <Name
              address={message.admin}
              name={adminMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default CreateGroupRequest;
