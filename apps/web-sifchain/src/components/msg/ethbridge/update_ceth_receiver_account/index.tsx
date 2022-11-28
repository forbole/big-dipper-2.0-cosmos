import Name from '@/components/name';
import MsgUpdateCethReceiverAccount from '@/models/msg/ethbridge/msg_update_ceth_receiver_account';
import { useProfileRecoil } from '@/recoil/profiles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';
import React from 'react';

const UpdateCethReceiverAccount: React.FC<{ message: MsgUpdateCethReceiverAccount }> = (props) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgUpdateCethReceiverAccount"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />, <b />]}
        values={{
          cethReceiverAccount: message.cethReceiverAccount,
        }}
      />
    </Typography>
  );
};

export default UpdateCethReceiverAccount;
