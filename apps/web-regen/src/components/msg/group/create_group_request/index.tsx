import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgCreateGroupRequest from '@models/regen/msg/group/msg_create_group_request';
import { useProfileRecoil } from 'ui/recoil/profiles';

const CreateGroupRequest: React.FC<{ message: MsgCreateGroupRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateGroupRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default CreateGroupRequest;