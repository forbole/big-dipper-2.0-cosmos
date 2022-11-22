import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgUpdateGroupAccountMetadataRequest from '@models/regen/msg/group/msg_update_group_account_metadata_request';
import { useProfileRecoil } from 'ui/recoil/profiles';

const UpdateGroupAccountMetadataRequest = (props: {
  message: MsgUpdateGroupAccountMetadataRequest;
}) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  const address = useProfileRecoil(message.address);
  const addressMoniker = address ? address?.name : message.address;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupAccountMetadataRequest"
        components={[
          <Name address={message.admin} name={adminMoniker} />,
          <Name address={message.address} name={addressMoniker} />,
        ]}
      />
    </Typography>
  );
};

export default UpdateGroupAccountMetadataRequest;
