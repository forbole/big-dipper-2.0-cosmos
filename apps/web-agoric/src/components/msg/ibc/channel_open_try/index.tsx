import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChannelOpenTry } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ChannelOpenTry = (props: {
  message: MsgChannelOpenTry;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelOpenTryContent"
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
          channel: message.channel,
          portId: message.portId,
          counterpartyVersion: message.counterpartyVersion,
        }}
      />
    </Typography>
  );
};

export default ChannelOpenTry;
