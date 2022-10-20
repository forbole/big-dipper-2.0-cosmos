import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgChannelCloseConfirm } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const ChannelCloseConfirm = (props: {
  message: MsgChannelCloseConfirm;
}) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelCloseConfirmContent"
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
          channelId: message.channelId,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelCloseConfirm;
