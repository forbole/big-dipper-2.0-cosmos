import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgEditFanToken } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const EditFanToken = (props: {
  message: MsgEditFanToken;
}) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgEditFanToken"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default EditFanToken;
