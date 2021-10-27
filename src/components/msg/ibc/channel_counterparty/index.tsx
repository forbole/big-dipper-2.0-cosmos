import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgCounterpartyChannel } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const CounterpartyChannel = (props: {
  message: MsgCounterpartyChannel;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txCounterpartyContent"
        components={[
          (
            <Name
              address={message.signer}
              name={signerMoniker}
            />
          ),
          <b />,
        ]}
      />
    </Typography>
  );
};

export default CounterpartyChannel;
