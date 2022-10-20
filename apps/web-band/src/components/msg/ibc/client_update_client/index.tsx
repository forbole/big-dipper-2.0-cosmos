import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgUpdateClient } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateClient = (props: {
    message: MsgUpdateClient;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txUpdateClientContent"
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
          chainId: message.chainId,
          clientId: message.clientId,
        }}
      />
    </Typography>
  );
};

export default UpdateClient;
