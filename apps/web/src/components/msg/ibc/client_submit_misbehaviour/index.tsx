import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgSubmitMisbehaviour } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const SubmitMisbehaviour = (props: {
    message: MsgSubmitMisbehaviour;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txSubmitMisbehaviourContent"
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
        }}
      />
    </Typography>
  );
};

export default SubmitMisbehaviour;
