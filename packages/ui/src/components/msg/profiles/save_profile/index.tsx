import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import { type MsgSaveProfile } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';

const SaveProfile: React.FC<{ message: MsgSaveProfile }> = (props) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);
  const creatorMoniker = creator ? creator?.name : message.creator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSaveProfileContent"
        components={[<Name address={message.creator} name={creatorMoniker} />]}
      />
    </Typography>
  );
};

export default SaveProfile;
