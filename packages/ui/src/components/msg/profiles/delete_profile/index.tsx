import Name from '@/components/name';
import { type MsgDeleteProfile } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const DeleteProfile: React.FC<{ message: MsgDeleteProfile }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);
  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDeleteProfileContent"
        components={[<Name address={message.creator} name={creatorMoniker} />]}
      />
    </Typography>
  );
};

export default DeleteProfile;
