import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgUpdateGroupMetadataRequest from '@models/regen/msg/group/msg_update_group_metadata_request';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateGroupMetadataRequest: React.FC<{ message: MsgUpdateGroupMetadataRequest }> = (
  props
) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupMetadataRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default UpdateGroupMetadataRequest;
