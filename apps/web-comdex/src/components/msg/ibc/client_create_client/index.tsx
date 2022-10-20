import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCreateClient } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const CreateClient = (props: {
    message: MsgCreateClient;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCreateClientContent"
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
        }}
      />
    </Typography>
  );
};

export default CreateClient;
