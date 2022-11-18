import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgUnlinkChainAccount from '@models/desmos/msg/profiles/msg_unlink_chain_account';
import { useProfileRecoil } from 'ui/recoil/profiles';

const UnlinkChainAccount: React.FC<{ message: MsgUnlinkChainAccount }> = (props) => {
  const { message } = props;
  const owner = useProfileRecoil(message.owner);
  const ownerMoniker = owner ? owner?.name : message.owner;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txMsgUnlinkChainAccount"
        components={[<Name address={message.owner} name={ownerMoniker} />, <b />]}
        values={{
          chainName: message.chainName,
        }}
      />
    </Typography>
  );
};

export default UnlinkChainAccount;
