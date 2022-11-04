import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgUpdateGroupMetadataRequest } from '@models';
import {
  useProfileRecoil,
} from '@recoil/profiles';

const UpdateGroupMetadataRequest = (props: {
  message: MsgUpdateGroupMetadataRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupMetadataRequest"
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

export default UpdateGroupMetadataRequest;
