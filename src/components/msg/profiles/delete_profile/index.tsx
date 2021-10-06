import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgDeleteProfile } from '@models';
import { useChainContext } from '@contexts';

const DeleteProfile = (props: {
  message: MsgDeleteProfile;
}) => {
  const { findAddress } = useChainContext();
  const { message } = props;

  const creator = findAddress(message.creator);
  const creatorMoniker = creator ? creator?.moniker : message
    .creator;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txDeleteProfileContent"
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

export default DeleteProfile;
