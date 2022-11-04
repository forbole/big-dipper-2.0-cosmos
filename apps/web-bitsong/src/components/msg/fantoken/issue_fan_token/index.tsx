import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgIssueFanToken } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const IssueFanToken = (props: {
  message: MsgIssueFanToken;
}) => {
  const { message } = props;

  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgIssueFanToken"
        components={[
          (
            <Name
              address={message.owner}
              name={ownerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          name: message.name,
          maxSupply: message.maxSupply,
        }}
      />
    </Typography>
  );
};

export default IssueFanToken;
