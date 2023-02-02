import Typography from '@mui/material/Typography';
import { Trans } from 'next-i18next';
import { FC } from 'react';
import Name from '@/components/name';
import { type MsgLinkChainAccount } from '@/models';
import { useProfileRecoil } from '@/recoil/profiles/hooks';

const LinkChainAccount: FC<{ message: MsgLinkChainAccount }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const creatorMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txLinkChainAccountContent"
        components={[<Name address={message.signer} name={creatorMoniker} />]}
      />
    </Typography>
  );
};

export default LinkChainAccount;
