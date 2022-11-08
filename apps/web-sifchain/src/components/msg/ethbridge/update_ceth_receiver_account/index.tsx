import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import MsgUpdateCethReceiverAccount from '@models/sifchain/msg/ethbridge/msg_update_ceth_receiver_account';
import { useProfileRecoil } from '@recoil/profiles';

const UpdateCethReceiverAccount = (props: { message: MsgUpdateCethReceiverAccount }) => {
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
