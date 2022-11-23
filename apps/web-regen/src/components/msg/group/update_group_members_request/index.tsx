import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgUpdateGroupMembersRequest from '@/models/msg/group/msg_update_group_members_request';
import { useProfileRecoil } from '@/recoil/profiles';

const UpdateGroupMembersRequest: React.FC<{ message: MsgUpdateGroupMembersRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateGroupMembersRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default UpdateGroupMembersRequest;
