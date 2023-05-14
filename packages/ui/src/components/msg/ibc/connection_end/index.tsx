import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgConnectionEnd } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const ConnectionEnd: FC<{ message: MsgConnectionEnd }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <TransByApp
        i18nKey="message_contents:txConnectionEndContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default ConnectionEnd;
