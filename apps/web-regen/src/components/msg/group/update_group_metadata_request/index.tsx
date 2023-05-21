import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import { FC } from 'react';
import Name from '@/components/name';
import MsgUpdateGroupMetadataRequest from '@/models/msg/group/msg_update_group_metadata_request';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const UpdateGroupMetadataRequest: FC<{ message: MsgUpdateGroupMetadataRequest }> = (props) => {
  const { message } = props;

  const admin = useProfileRecoil(message.admin);
  const adminMoniker = admin ? admin?.name : message.admin;

  return (
    <Typography>
      <AppTrans
        i18nKey="message_contents:MsgUpdateGroupMetadataRequest"
        components={[<Name address={message.admin} name={adminMoniker} />]}
      />
    </Typography>
  );
};

export default UpdateGroupMetadataRequest;
