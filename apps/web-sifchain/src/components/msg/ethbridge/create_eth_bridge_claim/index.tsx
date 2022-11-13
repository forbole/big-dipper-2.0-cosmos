import React from 'react';
import Trans from 'next-translate/Trans';
import Typography from '@material-ui/core/Typography';
import Name from 'ui/components/name';
import MsgCreateEthBridgeClaim from '@models/sifchain/msg/ethbridge/msg_create_eth_bridge_claim';
import { useProfileRecoil } from '@recoil/profiles';

const CreateEthBridgeClaim = (props: { message: MsgCreateEthBridgeClaim }) => {
  const { message } = props;

  const cosmosreceiver = useProfileRecoil(message.ethBridgeClaim.cosmosreceiver);
  const cosmosreceiverMoniker = cosmosreceiver
    ? cosmosreceiver?.name
    : message.ethBridgeClaim.cosmosreceiver;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateEthBridgeClaim"
        components={[
          <Name address={message.ethBridgeClaim.cosmosreceiver} name={cosmosreceiverMoniker} />,
          <b />,
        ]}
        values={{
          claimType: message.ethBridgeClaim.claimType,
        }}
      />
    </Typography>
  );
};

export default CreateEthBridgeClaim;
