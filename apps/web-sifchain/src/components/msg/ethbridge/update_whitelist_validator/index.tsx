import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from '@/components/name';
import MsgUpdateWhitelistValidator from '@/models/msg/ethbridge/msg_update_whitelist_validator';
import { useProfileRecoil } from '@/recoil/profiles';

const UpdateWhiteListValidator: React.FC<{ message: MsgUpdateWhitelistValidator }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateWhitelistValidator"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />, <b />]}
      />
    </Typography>
  );
};

export default UpdateWhiteListValidator;
