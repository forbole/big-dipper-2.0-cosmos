import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgChannelCloseConfirm } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ChannelCloseConfirm: FC<{ message: MsgChannelCloseConfirm }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txChannelCloseConfirmContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          channelId: message.channelId,
          portId: message.portId,
        }}
      />
    </Typography>
  );
};

export default ChannelCloseConfirm;
