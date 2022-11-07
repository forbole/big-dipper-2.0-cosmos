import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import Name from '@components/name';
import { MsgBurn } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const Burn = (props: { message: MsgBurn }) => {
  const { message } = props;

  const cosmosSender = useProfileRecoil(message.cosmosSender);
  const cosmosSenderMoniker = cosmosSender ? cosmosSender?.name : message.cosmosSender;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgBurn"
        components={[<Name address={message.cosmosSender} name={cosmosSenderMoniker} />]}
      />
    </Typography>
  );
};

export default Burn;