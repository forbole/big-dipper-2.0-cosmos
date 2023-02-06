import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgChannelOpenTry } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ChannelOpenTry: FC<{ message: MsgChannelOpenTry }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txChannelOpenTryContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
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
