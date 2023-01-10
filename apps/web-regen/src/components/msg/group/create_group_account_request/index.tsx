import Name from '@/components/name';
import MsgCreateGroupAccountRequest from '@/models/msg/group/msg_create_group_account_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const CreateGroupAccountRequest: FC<{ message: MsgCreateGroupAccountRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateGroupAccountRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default CreateGroupAccountRequest;
