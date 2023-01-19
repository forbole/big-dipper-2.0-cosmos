import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgVersion } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const Version: FC<{ message: MsgVersion }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txVersionContent"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default Version;
