import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from 'ui/components/name';
import MsgCreateDistribution from '@models/sifchain/msg/dispensation/msg_create_distribution';
import { useProfileRecoil } from '@recoil/profiles';

const CreateDistribution = (props: { message: MsgCreateDistribution }) => {
  const { message } = props;

  const distributor = useProfileRecoil(message.distributor);
  const distributorMoniker = distributor ? distributor?.name : message.distributor;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateDistribution"
        components={[<Name address={message.distributor} name={distributorMoniker} />, <b />]}
        values={{
          distributionType: message.distributionType,
        }}
      />
    </Typography>
  );
};

export default CreateDistribution;
