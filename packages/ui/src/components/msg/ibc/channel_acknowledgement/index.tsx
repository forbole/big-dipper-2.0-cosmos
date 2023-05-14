import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgAcknowledgement } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Acknowledgement: FC<{ message: MsgAcknowledgement }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txAcknowledgementContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          sourceChannel: message.sourceChannel,
        }}
      />
    </Typography>
  );
};

export default Acknowledgement;
