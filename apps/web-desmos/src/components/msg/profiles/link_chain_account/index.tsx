import Name from '@/components/name';
import MsgLinkChainAccount from '@/models/msg/profiles/msg_link_chain_account';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const LinkChainAccount: React.FC<{ message: MsgLinkChainAccount }> = (props) => {
  const { message } = props;

  const signer = useProfileRecoil(message.signer);
  const signerMoniker = signer ? signer?.name : message.signer;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txLinkChainAccount"
        components={[<Name address={message.signer} name={signerMoniker} />, <b />]}
        values={{
          name: message.chainConfig.name,
        }}
      />
    </Typography>
  );
};

export default LinkChainAccount;
