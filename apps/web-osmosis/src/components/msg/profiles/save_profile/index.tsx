import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSaveProfile } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const SaveProfile = (props: {
  message: MsgSaveProfile;
}) => {
  const { message } = props;

  const creator = useProfileRecoil(message.creator);
  const creatorMoniker = creator ? creator?.name : message
    .creator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSaveProfileContent"
        components={[
          (
            <Name
              address={message.creator}
              name={creatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default SaveProfile;
