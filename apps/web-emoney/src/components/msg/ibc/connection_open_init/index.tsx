import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgConnectionOpenInit } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ConnectionOpenInit = (props: {
  message: MsgConnectionOpenInit;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txConnectionOpenInitContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
        values={{
          clientId: message.clientId,
          counterparty: message.counterparty,
        }}
      />
    </Typography>
  );
};

export default ConnectionOpenInit;
