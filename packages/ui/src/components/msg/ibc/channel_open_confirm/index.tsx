import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import { type MsgChannelOpenConfirm } from '@models';
import { useProfileRecoil } from 'ui/recoil/profiles';

const ChannelOpenConfirm: React.FC<{ message: MsgChannelOpenConfirm }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelOpenConfirmContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelOpenConfirm;